const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const Users = mongoose.model("User", UserSchema);

module.exports = Users;