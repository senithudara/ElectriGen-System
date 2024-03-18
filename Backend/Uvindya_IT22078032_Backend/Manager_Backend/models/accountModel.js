const mongoose=require('mongoose')
const Schema=mongoose.Schema
const allowedRoles = ['Inventory Manager', 'Distributor Manager', 'Showroom Manager','Donation Manager','Export Manager','Supplier Manager','User Manager'];

const accountSchema=new Schema({
    fname:{
        type:String,
        required:true
    },
//fname,lname,id,pword,dob,email,constactNo,role
    lname:{
        type:String,
        required:true
    },

    id:{
        type:String,
        required:true
    },

    
    pword:{
        type:String,
        required:true
    },

    dob:{
        type:Date,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    
   contactNo:{
        type:String,
        required:true

    },
    
    role:{
        type: String,
        required: true,
        enum: allowedRoles
    }
  

    
    


},{timestamps:true})
module.exports=mongoose.model('Account',accountSchema)
