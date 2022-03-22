const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const feedRoutes = require('./routes/feed');
const homeRoute = require('./routes/web/home');
const mongoose = require('mongoose')
const Product = require('./models/product')


const app = express();
app.set('view engine', 'ejs',);
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static('public'))
app.use(bodyParser.json());

//handling CORS error
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET,PUT');
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})
app.use(homeRoute);
app.use('/api/v1',apiRoutes);



// mongoose.connect("mongodb+srv://mangodbUserName:mangodb2019@cluster0-624rn.mongodb.net/test?retryWrites=true&w=majority")
// .then(result=>{
//     console.log("MangoDb Connected Successfully");
//     return Product.create({
//         title:'First Title',
//         description:"description",
//         price:1000
//     })
// })
// .then(created=>{
//     console.log("Created");
//     app.listen(9000,()=>console.log("Server Running on port 9000"))
// })
// .catch(err=>{
//     console.log("MangoDb Connection Failed!!",err);
    
// })

app.listen(9000,()=>console.log("Server Running on port 9000"))