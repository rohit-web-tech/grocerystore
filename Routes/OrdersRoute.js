const express = require('express');
const orderModel = require('../Models/OrderModel');
const productsModel = require('../Models/ProductModel');
const userModel = require('../Models/UserModel')
const route = express.Router();

route.post('/getOrders',async(req,res)=>{
    const {userId} = req.body.params ;
    try {
        const orders = await orderModel.find({userId});
        res.json({message:"success",orders});
    } catch (error) {
        res.status(400).json({message:"Internal server error"})
    }
})

route.get('/getAllOrders',async(req,res)=>{
    try {
        const orders = await orderModel.find({});
        let ordersArr = orders.map(async(order,index)=>{
            const user = await userModel.findOne({_id:order.userId});
            const orderObj = {
                _id : order?._id ,
                productName : order?.productName  ,
                productQuantity : order?.productQuantity ,
                userName : user?.userName ,
                userEmail : user?.userEmail ,
                userContact : user?.userContact ,
                status : order?.status ,
                paymentId : order?.paymentId
            }
            return orderObj;
        })
        let promise = Promise.all(ordersArr) ;
        promise.then(orders=>{
            console.log(orders)
            res.json({message:"success",orders});
        })
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
})

route.post('/outForDelievery',async(req,res)=>{
    const {orderId} = req.body ;
    try {
        const order = await orderModel.findOne({_id:orderId}) ;
        order.status = "out for delievery" ;
        await order.save();
        const orders = await orderModel.find({});
        let ordersArr = orders.map(async(order,index)=>{
            const user = await userModel.findOne({_id:order.userId});
            const orderObj = {
                _id : order?._id ,
                productName : order?.productName  ,
                productQuantity : order?.productQuantity ,
                userName : user?.userName ,
                userEmail : user?.userEmail ,
                userContact : user?.userContact ,
                status : order?.status ,
                paymentId : order?.paymentId
            }
            return orderObj;
        })
        let promise = Promise.all(ordersArr) ;
        promise.then(orders=>{
            console.log(orders)
            res.json({message:"success",orders});
        })
    } catch (error) {
        res.status(500).json({"message":"internal server error"})
    }
})

route.post('/deliever',async(req,res)=>{
    const {orderId} = req.body ;
    try {
        const order = await orderModel.findOne({_id:orderId}) ;
        order.status = "delievered" ;
        await order.save();
        const orders = await orderModel.find({});
        let ordersArr = orders.map(async(order,index)=>{
            const user = await userModel.findOne({_id:order.userId});
            const orderObj = {
                _id : order?._id ,
                productName : order?.productName  ,
                productQuantity : order?.productQuantity ,
                userName : user?.userName ,
                userEmail : user?.userEmail ,
                userContact : user?.userContact ,
                status : order?.status ,
                paymentId : order?.paymentId
            }
            return orderObj;
        })
        let promise = Promise.all(ordersArr) ;
        promise.then(orders=>{
            console.log(orders)
            res.json({message:"success",orders});
        })
    } catch (error) {
        res.status(500).json({"message":"internal server error"})
    }
})

module.exports = route ;