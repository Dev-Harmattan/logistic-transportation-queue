const dbService = require('../databaseService/dbService');
const Queue = require('../middleware/queue');
let counter = 0;
let dayCount = 0;

exports.get_customers = async (req, res) => {
  // const db = dbService.getDbServiceInstance();
  // try {
  //   const results = await db.getAllData();
  //   if(result){
  //     res.status(201).json({results});
  //   }
    
  // } catch (error) {
  //   res.status(400).json({message: error});
  // }

  res.render('home');
}

exports.post_customer = async (req, res) => {
  
  // if(req.body){
  //   if(counter % 4 == 0){
  //     dayCount++
  //   }
  //   if(counter > 4){
  //     counter = 0
  //   }
  //   counter += 1;
  // }
  // let planner = new Queue();
  // planner.counter = counter;
  // planner.slot = counter;
  // planner.dayCount = dayCount;
  // planner.enqueue(req.body);
  

  // if(! planner.isEmpty()){
    
  // }
  // const db = dbService.getDbServiceInstance();
  // try {
  //   const result = await db.postData(req.body);
  //   if(result){
  //     res.status(201).json({result});
      
  //   }
  // } catch (error) {
  //   res.status(200).json({message: error});
  // }

  // res.render('addcustomer');
  
}

exports.get_customer = (req, res) => {
  res.render('addcustomer');
}

