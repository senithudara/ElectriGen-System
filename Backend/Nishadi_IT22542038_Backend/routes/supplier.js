const express = require ('express');
const {
    createSupplier,
    getSuppliers,
    getSupplierById ,
    deleteSupplier,
    updateSupplier ,

} = require ('../nishadi_controller/supplierController')
const router = express.Router();

//Get all suppliers
router.get('/',getSuppliers);

//Get a single supplier
router.get ('/:id', getSupplierById)

//POST a new supplier
router.post('/', createSupplier);

//DELETE a single supplier
router.delete('/:id',deleteSupplier);

//UPDATE  a  supplier
router.patch('/:id', updateSupplier );

module.exports = router;