const express = require('express')
const Product = require('../models/productModel')
const {

    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct

} = require('../controllers/productController')

const router = express.Router()

//GET all products
router.get('/', getProducts)

//GET a single product
router.get('/:id', getProduct)

//POST a new product
router.post('/', createProduct)

//DELETE a product
router.delete('/:id', deleteProduct)

//UPDATE a product
router.patch('/:id', updateProduct)


module.exports = router