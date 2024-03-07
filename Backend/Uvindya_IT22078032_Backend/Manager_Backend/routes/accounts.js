const express=require('express')
const {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
}=require('../controllers/accountController')

const router=express.Router()

//Get all accounts
router.get('/',getAccounts)

//Get a single  Account
router.get('/:id',getAccount)

//post new an Account
router.post('/',createAccount)

//delete an Account
router.delete('/:id',deleteAccount)

// Update an Account
router.patch('/:id',updateAccount)


module.exports=router