require('../config/db')
const Product = require('../models/product'); 
const productDetails = require('../models/productDetails');


//get homepage 

exports.homepage = async(req, res) => {


    try {
        const limitNumber = 8; 
        const products = await Product.find({}).limit(limitNumber); 
        res.render('index', { products: products })
    } catch (error) {
        res.status(500).send({message: error.message || "error occured"})
        
    }








   
}; 
//get product details 

exports.productPage = async(req, res) => {
    try { 
        const limitNumber = 5; 
        const productDetail = await productDetails.find({}).limit(limitNumber); 
        res.render('product', { productDetails: productDetail })
        
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"})
        
    }
}




exports.postData = async(req, res) => {
    try { 
        const { image, title, price } = req.body; 
        const postProduct = await Product.create( { image, title, price }); 
        res.status(201).json(postProduct);
        console.log(postProduct); 
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"})
        
    }
     
}
//post product Details 
exports.productDetails = async(req, res) => {
    try { 
        const { image, title, price, Review, Type, Brand, 
            Categories, Tags, Availability, Specifications,
            KeyFeatures,HDDCapacity, NoofCores, Display, 
            GraphicsProcessor,ScreenSize, Resolution, WirelessWifi,
            Bluetooth, USBPort, BatteryCapacity, TypeofHDD
        
        
        } = req.body; 
        const newProductDetails = await productDetails.create( { image, title, price, Review, Type, Brand, 
            Categories, Tags, Availability, Specifications,
            KeyFeatures,HDDCapacity, NoofCores, Display, 
            GraphicsProcessor,ScreenSize, Resolution, WirelessWifi,
            Bluetooth, USBPort, BatteryCapacity, TypeofHDD
         }); 
        res.status(201).json(newProductDetails);
        console.log(newProductDetails); 
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"})
        
    }
     
} 

