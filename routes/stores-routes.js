const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();

router.get("/cart", (req, res) => {
    console.log(req.body)

});


router.get("/displaystoreitems", (req, res) => {
    console.log("Company")
    console.log(req.body)
    // db.Inventory.find({"company":req.body.data.company})
    // .then(atternters=>{
    //     console.log("companies", companies)
    //     res.json(companies)
    // })

});

module.exports = router;
