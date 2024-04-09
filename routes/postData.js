const express = require('express'); 
const router = express.Router() 

const postDataController = require("../controllers/postData.js"); 

//post data  routes 

router.post('/postdata', postDataController); 




module.exports = router; 