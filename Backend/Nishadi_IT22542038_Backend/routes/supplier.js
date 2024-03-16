const express = require ('express');
const Supplier = require ('../models/SupplierModel')
const router = express.Router();

//Get all suppliers
router.get('/',(req,res) => {
    res.json({mssg:'GET all suppliers'});

});

//Get a single supplier
router.get ('/:id',(req,res) =>{
res.json({mssg:'GET a single supplier'});

});

//POST a new supplier
router.post('/',async(req,res) =>{
    const{Sup_ID,Sup_Name,Sup_Email,Sup_Contact,Sup_Ord_id, Sup_matrial_code} = req.body

    
    try{
const supplier = await Supplier.create({Sup_ID,Sup_Name,Sup_Email,Sup_Contact,Sup_Ord_id, Sup_matrial_code})
  res.status(200).json(supplier)

       }catch (error)
    {
        res.status(400).json({error:error.message})
    }
    

});

//DELETE a single supplier
router.delete('/:id',(req,res) =>{
    res.json({mssg:'DELETE a supplier'});

});

//UPDATE  a  supplier
router.patch('/:id',(req,res) =>{
    res.json({mssg:'UPDATE a supplier'});

});

module.exports = router;