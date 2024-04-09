const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
    image: {type: String, required: false}, 
    title: {type: String, required: false},
    details: {type:String, required: false}, 
    price: {type: Number, required: false}
     
});

module.exports = mongoose.model('Product', productSchema); 