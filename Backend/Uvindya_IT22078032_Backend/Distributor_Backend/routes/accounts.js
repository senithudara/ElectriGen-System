const express=require('express')

const {
    createAccount,
    getAccount,
    getAccounts,
    deleteAccount,
    updateAccount
}=require('../controllers/AccountController')

const router=express.Router()

//Get all accounts
router.get('/',getAccounts)

//Get a single account
router.get('/:id',getAccount)
//post a new account
router.post('/', createAccount)

//Delete account
router.delete('/:id',deleteAccount)
//update account

router.patch('/:id',updateAccount)


module.exports=router