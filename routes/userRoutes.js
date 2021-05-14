const express =  require('express');
const router = express.Router();
const {get_customers, post_customer, get_customer, getAllCustomers} = require('../controllers/userControlller');

//page route
router.get('/', getAllCustomers);
router.route('/create/customer')
.get(get_customer)
.post(post_customer);


//api route
router.get('/getCustomers', get_customers);



module.exports = router;