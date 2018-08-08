const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();


router.post("/addinventory", (req, res)=>{
    // console.log(req.body)
    db.Inventory.create(req.body).then(items=>{
        // console.log(items)
        res.json(items)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});

router.get("/displayitems", (req, res)=>{
    // console.log(req.body)
    db.Inventory.find({}).then(items=>{
        // console.log(items)
        res.json(items)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});


router.get("/products", (req, res)=>{
    // console.log(req.body)
    db.Inventory.find({}).then(products=>{
        // console.log(items)
        res.json(products)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })

});




module.exports = router;