const product = require("../models/product");

exports.postData = async(req, res) => {
    try { 
        const newProduct = req.body; 
        const postProduct = await product.create( { newProduct }); 
        res.status(201).json(postProduct);
        console.log(postProduct); 
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"})
        
    }
     
}


