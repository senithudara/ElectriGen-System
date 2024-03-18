const express = require('express');
const {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
} = require('../controllers/accountController');
const requireAuth=require('../middleware/requireAuth')

//require auth for all account routes
const router = express.Router();

router.use(requireAuth)

// Get all accounts
router.get('/', getAccounts);

// Get a single Account
router.get('/:id', getAccount);

// Post new an Account
router.post('/', createAccount);

// Delete an Account
router.delete('/:id', deleteAccount);

// Update an Account
router.patch('/:id', updateAccount);



module.exports = router;
