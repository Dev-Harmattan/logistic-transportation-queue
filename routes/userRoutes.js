const express =  require('express');
const router = express.Router();
const {get_customers, post_customer} = require('../controllers/userControlller');

router.post('/customer', post_customer);

router.get('/customers', get_customers);

module.exports = router;