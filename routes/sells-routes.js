const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();

router.post("/sells", (req, res) => { 
    db.Inventory.findById(req.body._id, (err, item) => {
        if (err) return err;
        item.both = item.both - req.body.quantity;
        item.save((err, updatedItem) => {
            if (err) {
                return err.message
            } else {
                db.Sells.find({"_id":req.body._id, "customerID": req.body.customerID}).then(item =>{
                    if(item.length){
                        db.Cart.deleteOne({"_id": req.body._id}).then(deleted=>{
                        });
                    } else {
                        const {_id} =req.body;
                        const newSell = req.body;
                        delete newSell._id;
                        db.Sells.create(newSell).then(sell=>{
                            res.send(sell)
                        }).then(sell=>{
                            db.Cart.deleteOne({"_id": _id}).then(deleted=>{
                            }).catch(err=>{
                                return err.message
                            })
                            
                        });
                    };
                });
            };
        });
    });
});

router.get("/getsells", (req, res) => { 
        db.Sells.find({"storeId":req.query.storeId}).then(sells =>{
        res.send(sells)
    }).catch(err=>{
        return err.message
    })

});

module.exports = router;