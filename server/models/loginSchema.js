const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    mobile:{
        type:String,
    },
    address:{
        type:String,
    },
})


const Login = new mongoose.model('login',loginSchema);
module.exports=Login;