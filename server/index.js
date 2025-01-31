const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const port = process.env.PORT;
const Contact = require('./models/contactSchema');
const Login = require('./models/loginSchema');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/contact',async(req,res)=>{
    try{
        const contact = new Contact({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message,
        })
        const created = await contact.save();
        console.log(created);
        res.status(200).send("Message saved");
    }catch(e){
        res.status(400).send(e);
    }
})

app.post('/signup',async(req,res)=>{
    try{
        const signup = new Login({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.password,
            address:req.body.address
        })
        const sign = await signup.save();
        console.log(sign);
        res.status(200).send("Registered");
    }catch(e){
        res.status(400).send(e);
    }
})

app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Login.findOne({email:email});
        console.log(user);
        if(user){
            if(password===user.password){
                res.status(200).send("Correct password");
            }
            else{
                res.status(400).send("Incorrect password");
            }
        }
        else{
            res.status(400).send("User not found");
        }
       
    }catch(e){
        console.log(e);
    }
})

// app.get('/contact',async(req,res)=>{
//     try{
//         const contact = new Contact({
//             name:'pooja1',
//             email:'pooja@gmail.com',
//             message:'hii'
//         })
//         const created = await contact.save();
//         console.log(created);
//     }catch(e){
//         console.log(e);
//     }
// })

app.listen(port,()=>{
    console.log("Server establish");
})