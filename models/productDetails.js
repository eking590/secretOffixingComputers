const mongoose = require('mongoose'); 

const productDetailsSchema = new mongoose.Schema({
    image: {type: String, required:'this field is required'}, 
    title: {type: String, required:'this field is required'}, 
    price: {type: Number, required:'this field is required'}, 
    Review: {type: String, required:'this field is required'}, 
    Type: {type: String, required:'this field is required'}, 
    Brand: {type: String, required:'this field is required'}, 
    Categories: {type: String, required:'this field is required'}, 
    Tags: {type: String, required:'this field is required'}, 
    Availability: {type: String, required:'this field is required'}, 
    SKU: {type:String, required:'this field is required'}, 
    Model: {type:String, required:'this field is required'}, 
    Weight: {type:Number, required:'this field is required'},
    processorBrand: {type:String, required:'this field is required'}, 
    graphics: {type:String, required:'this field is required'}, 
    RAM: {type:String, required:'this field is required'}, 
    HDDCapacity: {type:String, required:'this field is required'},
    NoofCores: {type:String, required:'this field is required'}, 
    Display: {type:String, required:'this field is required'}, 
    GraphicsProcessor: {type:String,required:'this field is required'}, 
    ScreenSize: {type:String, required:'this field is required'},
    Resolution: {type:String,required:'this field is required'}, 
    WirelessWifi: {type:String,required:'this field is required'}, 
    Bluetooth: {type:String,required:'this field is required'},
    USBPort: {type:String,required:'this field is required'}, 
    BatteryCapacity: {type:String,required:'this field is required'}, 
    TypeofHDD: {type:String,required:'this field is required'}

});

module.exports = mongoose.model('ProductDetail', productDetailsSchema); 