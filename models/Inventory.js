const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;