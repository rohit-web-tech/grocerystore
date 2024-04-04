const express = require('express');
const userModel = require('../Models/UserModel');
const adminModel = require('../Models/AdminModel')
const route = express.Router();

route.post('/loginUser',async(req,res)=>{
    const {email,password} = req.body.params ;
    try {
        const user = await userModel.find({userEmail:email});
        if(user.length>0){
            if(user[0].userPassword===password){
                res.json({"message":"success",user});
            }else{
                res.json({"message":"Please login with right credentials!!"});
            }
        }else{
            res.json({"message":"Please login with right credentials!!"})
        }
    } catch (error) {
        res.status(400).json({"message":"internal server error"});
    }
})

route.post('/registerUser',async(req,res)=>{
    const {email,password,name,contact} = req.body.params ;
    try {
        const user = await userModel.find({userEmail:email});
        if(user.length>0){
            res.json({message:"User already exist with same email!! Please Login"})
        }else{
            const data = new userModel({
                userName : name,
                userEmail : email ,
                userPassword : password , 
                userContact : contact,
            });
            await data.save() ;
            res.json({"message":"success",data})
        }
    } catch (error) {
        res.status(400).json({"message":"internal server error"});
    }
})

route.post('/updateUserProfile',async(req,res)=>{
    const{userDetails} = req.body.params;
    try {
        const {userName,userContact,userEmail,userAddress}=userDetails;
        let user = await userModel.findOne({_id:userDetails._id});
        user.userName=userName,user.userAddress=userAddress,user.userContact=userContact;
        await user.save();
        res.json({message:"success",user});
    } catch (error) {
        res.status(400).json({"message":"internal server error"});
    }
})

route.post('/sendQueryEmail',(req,res)=>{
    const {userName,userEmail,userContact,userMessage} = req.body.params ;
    try {
        const emailOptions = {
                sendTo: process.env.myEmail,
                subject: "Got a query!",
                mainText: `<h5 style="white">Got a query : <br>${userMessage} <br>From : ${userName} <br>Email : ${userEmail} <br>Contact Number :${userContact}</h5>`,
                cName: "Admin",
                btnText: "Reply",
                btnLink: `mailTo:${userEmail}`,
                headingText: `Hey admin got a query from ${userName} !!`
        }
        // emailSender(emailOptions) ;
        res.json({message:"success"});
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
})

route.post("/loginAdmin",async(req,res)=>{
    const {adminDetails} = req.body ;
    try {
        const admin = await adminModel.findOne({});
        if(admin.userName != adminDetails.userName && admin.password != adminDetails.password){
            res.json({"message":"Please login with right credentials!!"})
        }else{
            res.json({"message":"success"})
        }
    } catch (error) {
        res.status(500).json({"message":"internal server error"})
    }
})

module.exports = route ;