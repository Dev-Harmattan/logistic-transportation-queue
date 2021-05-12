const express =  require('express');
const router = express.Router();
const {get_customers, post_customer, get_customer} = require('../controllers/userControlller');

router.route('/customer').get(get_customer).post(post_customer);

router.get('/customers', get_customers);

module.exports = router;