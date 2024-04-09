const express = require('express'); 
const router = express.Router() 

const sfcController = require("../controllers/sfc.js"); 

//app routes 

router.get('/', sfcController.homepage); 
router.get('/product', sfcController.productPage);
router.post('/postdata', sfcController.postData); 
router.post('/productdetails', sfcController.productDetails); 



module.exports = router; 