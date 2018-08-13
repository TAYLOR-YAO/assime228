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
    storeId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    storeColor:{
        type:String,
        default: "maroon"
    },
    textColor:{
        type:String,
        default:"white"
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type: Schema.Types.Decimal128,
        required:true
    },
    // sku:{
    //     type:Number,
    //     required:true
    // },
    both:{
        type:Number,
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
    },
    brand:{
        type:String,
        require:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;