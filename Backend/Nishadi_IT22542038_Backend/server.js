require('dotenv').config();

const express =  require('express');
const mongoose = require ('mongoose');
const supplierChain = require('./routes/supplier');
const supplierChain_order = require('./routes/supplier_order');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) =>{
console.log(req.path,req.method);
next();
})

//routes
app.use('/api/supplier',supplierChain);
app.use('/api/supplier_order',supplierChain_order);


// connect to DB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    //listen for requests
app.listen(process.env.PORT,() =>{
    console.log("connected to DB and listen on port ",process.env.PORT )
    });
})

.catch((error) =>{
    console.log(error)
}) 



