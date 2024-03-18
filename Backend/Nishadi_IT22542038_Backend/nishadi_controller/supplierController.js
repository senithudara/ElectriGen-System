const Supplier = require('../nishadi_models/SupplierModel');
const mongoose = require ('mongoose')

// Get all suppliers
const getSuppliers = async (req, res) => {
    try {
        const supplier = await Supplier.find({}).sort({ createdAt: -1 });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a single supplier
const getSupplierById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:'No such supplier'})
        }
        
        const supplier = await Supplier.findById(id);
        if (!supplier) {
            return res.status(404).json({ error: 'No such Supplier' });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create new supplier
const createSupplier = async (req, res) => {
    const { Sup_ID,Sup_Name,Sup_Email,Sup_Contact,Sup_Ord_id, Sup_matrial_code } = req.body;
    
    //add doc to db
    try {
        const supplier = await Supplier.create({ Sup_ID,Sup_Name,Sup_Email,Sup_Contact,Sup_Ord_id, Sup_matrial_code });
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a Supplier
const deleteSupplier =  async (req, res) =>{

    const { id } = req.params;

if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({error:'No such supplier'})
}
const supplier = await Supplier.findOneAndDelete({_id:id})

if (!supplier) {
    return res.status(404).json({ error: 'No such Supplier' });
}
res.status(200).json(supplier);
}


// Update the supplier
const updateSupplier = async (req, res) => {
    const { id } = req.params; // Extract id from request params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such supplier' });
    }

    try {
        // Find the supplier by id and update its fields with the data from req.body
        const supplier = await Supplier.findOneAndUpdate({ _id: id }, req.body, { new: true });

        if (!supplier) {
            return res.status(404).json({ error: 'No such Supplier' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createSupplier,
    getSuppliers,
    getSupplierById ,
    deleteSupplier,
    updateSupplier ,
};
