const express = require('express'); 
const expressLayouts = require('express-ejs-layouts'); 
const bodyParser = require('body-parser'); 
const connectDb = require('./config/db'); 
connectDb(); 
const app = express(); 

const port =  process.env.PORT || 4000;  



//middlewares 
app.use(express.urlencoded( { extended: true })); 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use('/public/img', express.static('./public/img')); 
app.use(expressLayouts); 

app.set('layout', './layouts/main'); 
app.set('view engine', 'ejs'); 



//routes 
const routes = require('./routes/sfc.js'); 
app.use('/', routes)  










app.listen(port, () => {
    console.log(`server is live, running on localhost:${port} `)
}) ; 