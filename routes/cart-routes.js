const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();



router.post("/cartitem", (req, res)=>{
    // console.log(req.body)
    // db.Cart.insertMany(req.body).then(item=>{
    //     // console.log(item);
    //     res.json(item)
    // })
    // .catch(function(err) {
    //     console.log(err.message);
    // })

})



module.exports = router;