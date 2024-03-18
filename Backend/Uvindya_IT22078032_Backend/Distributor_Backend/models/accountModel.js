const mongoose=require('mongoose')

const Schema= mongoose.Schema

const accountSchema=new Schema({
//fname,lname,did,nic,email,contactNo
  
    fname:{
        type:String,
        required:true
    },

    lname:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true,
       
    },
    nic:{
        type:String,
        required:true,
     
    },

    email:{
        type:String,
        required:true
    },
    
   contactNo:{
        type:String,
        required:true

    },
    
},{timestamps:true})
module.exports=mongoose.model('Account',accountSchema)

