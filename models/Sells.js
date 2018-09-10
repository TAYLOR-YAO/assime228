const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SellSchema = new Schema({

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
    price:{
        type: Schema.Types.Decimal128,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    customerID:{
        type: String,
        required:true
    },
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
    color:{
        type: String,
        required: true
    },
    type:{
        type:String,
        require:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Sells = mongoose.model("Sells", SellSchema);

module.exports = Sells;