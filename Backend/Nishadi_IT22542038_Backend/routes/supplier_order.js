const express = require('express');
const {
    createOrder,
    getOrders,
    getOrderById,
    deleteOrder,
    updateOrder ,
} = require ('../nishadi_controller/supplier_orderController')
const router = express.Router();

// Get all orders
router.get('/', getOrders);

// Get a single order
router.get('/:id', getOrderById );

// POST a new order
router.post('/', createOrder);

// DELETE a single order
router.delete('/:id', deleteOrder)

// UPDATE a supplier order
router.patch('/:id',updateOrder)

module.exports = router;
