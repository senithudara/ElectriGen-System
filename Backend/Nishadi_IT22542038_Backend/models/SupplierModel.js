const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const supplierSchema =  new Schema({
    Sup_ID: {
        type:String,
        required: true

    },
    Sup_Name: {
        type:String,
        required:true
    },
    Sup_Email:{
        type:String,
        required:true
    },
    Sup_Contact:{
        type:Number,
        required:true
    },
    Sup_Ord_id:{
        type:String,
        required:true
    },
    Sup_matrial_code:{
        type:String,
        required:true
    }
}, {timestamps: true})

module.exports = mongoose.model('Supplier_De',supplierSchema)
