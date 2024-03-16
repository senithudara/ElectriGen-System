const express = require('express');
const Supplier_order = require('../models/supplier_orderModel');
const router = express.Router();

// Get all orders
router.get('/', (req, res) => {
    res.json({ message: 'GET all orders' });
});

// Get a single order
router.get('/:id', (req, res) => {
    res.json({ message: 'GET a single order' });
});

// POST a new order
router.post('/', async (req, res) => {
    const { Sup_Ord_id, Sup_ID, Sup_Quant, Sup_Cost, Sup_matrial_code, Sup_orded_date, Sup_recpt_date, Sup_Ord_sts, Sup_rating } = req.body;

    try {
        const order = await Supplier_order.create({ Sup_Ord_id, Sup_ID, Sup_Quant, Sup_Cost, Sup_matrial_code, Sup_orded_date, Sup_recpt_date, Sup_Ord_sts, Sup_rating });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE a single order
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a order' });
});

// UPDATE a supplier order
router.patch('/:id',(req,res) =>{
    res.json({mssg:'UPDATE a order'});

});
module.exports = router;
