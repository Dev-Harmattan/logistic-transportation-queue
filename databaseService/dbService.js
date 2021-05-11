const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();


const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if(err){
    console.log(err)
  }else{
    console.log(`Database ${connection.state}`)
  }
})

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM customers';
        connection.query(query, (err, results) => {
          if(err){
            reject(new Error(err.message));
          }
          resolve(results)
        })
      })

      return response;

    } catch (error) {
      console.log(error)
    }
  }

  async postData(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO customers (customer_name, pick_up_location, drop_off_location, date_alocate, slot) VALUES(?, ?, ?, ?, ?)';
        connection.query(query, [
          data.customer_name, 
          data.pick_up_location,
          data.drop_off_location,
          data.date_alocate,
          data.slot
        ], (err, result) => {
          if(err){
            reject(new Error(err.message));
          }
          resolve(result.insertId);
        })
      })
      return response;

    } catch (error) {
      console.log(error);
    }
  }
}



module.exports = DbService;