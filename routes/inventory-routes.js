const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();


router.post("/addinventory", (req, res)=>{
    db.Inventory.create(req.body).then(items=>{
        res.json(items)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});

router.get("/displayitems", (req, res)=>{
    db.Inventory.find({}).then(items=>{
        res.json(items)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});

router.get("/products", (req, res)=>{
    db.Inventory.find({}).then(products=>{
        res.json(products)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});

router.post("/updateinventory", (req, res)=>{
    db.Inventory.findById(req.body._id, (err, item) => {
        if (err) return handleError(err);
        item.both = item.both - req.body.quantity;
        item.save((err, updatedItem) => {
            if (err) return handleError(err);
            res.send(updatedItem.both)
    
        });
    });
});

module.exports = router;