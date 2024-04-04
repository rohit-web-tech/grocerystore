const express = require('express');
const route = express.Router();
const productsModel = require('../Models/ProductModel');

route.get('/getProductsDetail',async(req,res)=>{
    try {
        const products = await productsModel.find({});
        res.json({"message":"success",products});
    } catch (error) {
        res.status(400).json({"message":"internal server error"})
    }
})

route.delete("/removeProduct",async(req,res)=>{
    const {productId} = req.body ;
    try {
        await productsModel.deleteOne({_id:productId});
        const products = await productsModel.find({});
        res.json({"message":"success",products});
    } catch (error) {
        res.status(500).json({"message":"internal server error"})
    }
})

route.post("/addNewProduct",async(req,res)=>{
    const {ProductData} = req.body ;
    console.log(ProductData)
    try {
        const newProduct = await new productsModel({
            productName : ProductData.ProductName ,
            productPrice: ProductData.ProductPrice,
            productCategory: ProductData.ProductCategory,
            productUnit : ProductData.Unit,
            productImg : ProductData.imageUrl
        })
        console.log(newProduct)
        await newProduct.save();
        res.json({"message":"success"});
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
})

module.exports = route ;