const Orders = require('../models/orderModel.js') // Rename the variable
const mongoose = require('mongoose')

//get all orders
const getOrders = async(req,res) => {
    try {
        const orders = await Orders.find({}).sort({ createdAt: -1 });
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


//get a single order
const getOrder = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such order'})
    }

    const order = await Orders.findById(id)

    if(!order){
        return res.status(404).json({error: 'no such order'})
    }

    res.status(200).json(order)
}


//create new order
const createOrder = async (req,res) => {
    const {Name,ID,Item,Quantity,Status} = req.body

    //add doc to db
    try{
        const newOrder = await Orders.create({Name,ID,Item,Quantity,Status})
        res.status(200).json(newOrder)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete an order
const deleteOrder = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid order ID'})
    }

    const deletedOrder  = await Orders.findOneAndDelete({_id: id})

    if(!deletedOrder){
        return res.status(400).json({error: 'Order not found'})
    }

    res.status(200).json(deletedOrder)
}


//update an order
const updateOrder = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such order'})
    }

    const updateOrder = await Orders.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!updateOrder){
        return res.status(400).json({error: 'no such order'})
    }

    res.status(200).json(updateOrder)


}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrder
}