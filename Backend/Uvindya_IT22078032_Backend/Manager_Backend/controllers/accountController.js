const Account=require('../models/accountModel')
const mongoose=require('mongoose')
//get all Accounts

const getAccounts=async(req,res)=>{
    const accounts=await Account.find({}).sort({createdAt:-1})

    res.status(200).json(accounts)

}
//get a single account

const getAccount=async(req,res)=>{

    const {id}=req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such Account'})
}
    const account=await Account.findById(id)

    if(!account){
        return res.status(404).json({error:'No such Account'})
    }
    res.status(200).json(account)
}

//Addcreate new Account
const createAccount=async(req,res)=>{
    const{fname,lname,id,pword,dob,email,contactNo,role}=req.body
   // add doc to db
try{
const account= await Account.create({fname,lname,id,pword,dob,email,contactNo,role})
res.status(200).json(account)
}catch(error){

    res.status(400).json({error:error.message})
}
   
}

//delete an account
const deleteAccount=async(req,res)=>{

    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Account'})
    }

    const account= await Account.findByIdAndDelete({_id:id})

    if(!account){
        return res.status(404).json({error:'No such Account'})
    }
    res.status(200).json(account)
}

//update an account

const updateAccount=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Account'})
    }

    const account=await Account.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!account){
        return res.status(404).json({error:'No such Account'})
    }
    res.status(200).json(account)
}



module.exports={
    getAccounts,
    getAccount,
    createAccount,
    deleteAccount,
    updateAccount
}