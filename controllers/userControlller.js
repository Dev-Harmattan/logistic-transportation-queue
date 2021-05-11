const dbService = require('../databaseService/dbService');

exports.get_customers = async (req, res) => {
  const db = dbService.getDbServiceInstance();
  try {
    const results = await db.getAllData();
    if(result){
      res.status(201).json({results});
    }
    
  } catch (error) {
    res.status(400).json({message: error});
  }
}

exports.post_customer = async (req, res) => {
  const db = dbService.getDbServiceInstance();
  try {
    const result = await db.postData(req.body);
    if(result){
      res.status(201).json({result});
      
    }
  } catch (error) {
    res.status(200).json({message: error});
  }
  
}