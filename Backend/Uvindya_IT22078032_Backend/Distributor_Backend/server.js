require('dotenv').config()
const express =require('express')
const mongoose=require('mongoose')
const accountRoutes=require('./routes/accounts')

//express app
const app= express()


//middleware
app.use(express.json())

app.use((req,res,next)=>{

    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/accounts',accountRoutes)

//connect to db 
mongoose.connect(process.env.MONG_URI)
.then(()=>{

    //listen for request
app.listen(process.env.PORT,()=>{
    console.log('connected to db listening on port ',process.env.PORT)
})


})
.catch((error)=>{
    console.log(error)
})


