const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    Item: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Orders', orderSchema)
