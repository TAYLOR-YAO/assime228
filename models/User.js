const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    photoUrl:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        require:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;