const express=require('express')
const Export=require('../models/exportModel')

const router=express.Router()

//GET all exports
router.get('/',(req,res)=>{
    res.json({mssg: 'GET all exports'})
})

//GET a single export
router.get('/:id',(req,res)=>{
    res.json({mssg: 'GET a single export'})
})

//POST a new export
router.post('/',async (req,res)=>{
    const{exportOrderID, importer, itemID, quantity, status}=req.body

    try{
        const exportt=await Export.create({exportOrderID, importer, itemID, quantity, status})
        res.status(200).json(exportt)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELETE an export
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'DELETE an export'})
})

//UPDATE a export
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE an export'})
})

module.exports=router