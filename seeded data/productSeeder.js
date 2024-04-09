require('../config/db')
const Product = require('../models/product'); 



async function insertDummyProductData(){
    try {
        await Product.insertMany(
            [
    
                {
                image: '2021 newest dell inspiron 15 3000 series laptop.jpeg ', 
                title: 'latest dell inspiron 15 300 series',
                price: 500000, 
                details: "core: 5, HDD: SDD"
                }, 
            {
                image: 'hp 15 pavilion.avif ', 
                title: 'latest dell inspiron 15 300 series',
                price: 400000, 
                details: "core: 5, HDD: SDD"
            }, 
            {
                image: 'Hp pavilion 15 gaming laptop 15.6.jpeg', 
                title: 'latest dell inspiron 15 300 series',
                price: 300000, 
                details: "core: 5, HDD: SDD"
            }, 
            {
                image: 'dell inspiron 15 open.webp', 
                title: 'latest dell inspiron 15 300 series',
                price: 200000, 
                details: "core: 5, HDD: SDD"
            }, 
            {
                image: 'hp pavilion 15 laptop.png', 
                title: 'latest dell inspiron 15 300 series',
                price: 100000,
                details: "core: 5, HDD: SDD"
            }
            
            ]
        ); 
    } catch (error) {
        console.log('err' + error); 
    }
}

insertDummyProductData(); 
 

