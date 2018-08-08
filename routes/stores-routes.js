const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();

//================== find by Company ====================
router.get("/displaystoreitems", (req, res) => {
    db.Inventory.find({"company":req.query.company}).then(storeItems =>{
        res.send(storeItems)
    }).catch(err=>{
        console.log(err);
    });
});

//================== find by Category ====================
router.get("/displaycategoryitems", (req, res) => {
    db.Inventory.find({"category":req.query.category}).then(storeItems =>{
        res.send(storeItems)
    }).catch(err=>{
        console.log(err);
    });
});

//================== find by Type ====================
router.get("/displaytypeitems", (req, res) => { 
    db.Inventory.find({"type":req.query.type}).then(storeItems =>{
        res.send(storeItems)
    }).catch(err=>{
        console.log(err);
    });
});




module.exports = router;
