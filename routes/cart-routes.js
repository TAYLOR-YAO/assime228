const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();

router.post("/order", (req, res)=>{
    if (req.body === undefined || req.body.length == 0) {
    } else {
        db.Cart.deleteMany({"customerID": req.body[0].customerID }).then(deleted=>{
            db.Cart.insertMany(req.body).then(order=>{
                res.json(order);
            })
            .catch(function(err) {
                return err.message;
            })
        }).catch(err=>console.log(err.message))  
    }
});

router.get("/orders", (req, res)=>{
    db.Cart.find({}).then(orders=>{
        res.send(orders)
    });
});

router.get("/ordersbycompany", (req, res) => { 
    db.Cart.find({"company":req.query.company}).then(orders =>{
        res.send(orders)
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;