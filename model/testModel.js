const db = require('../config/query.js')

let model = {}

model.testConnection = () => {
          return new Promise((resolve, reject) => {
              db.connect((err) => {
                  if (err) {
                      console.error('Error connecting to MySQL:', err);
                      resolve(false); // Connection failed
                  } else {
                      console.log('Connected to MySQL');
                      resolve(true); // Connection successful
                  }
              });
          });
      };


console.log(model)

module.exports = model 