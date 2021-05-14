const dbService = require('../databaseService/dbService');
const Planner = require('../middleware/queue');
let counter = 0;
let dayCount = 0;

exports.get_customers = async (req, res) => {
  const db = dbService.getDbServiceInstance();
  try {
    const results = await db.getAllData();
    res.status(201).json({results});
  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message});
  }
}

exports.post_customer = async (req, res) => {
  const inputs = req.body;
  let planner = new Planner();
  planner.enqueue(inputs);
  if(!planner.isEmpty()){
    const db = dbService.getDbServiceInstance();
    try {
      const result = await db.postData(planner.dequeue());
      if(result){
        res.redirect('/');
      }
    } catch (error) {
      res.status(200).json({message: error});
    }
  }
}

exports.get_customer = (req, res) => {
  res.render('addcustomer');
}

exports.getAllCustomers = (req, res) => {
  res.render('home');
}

