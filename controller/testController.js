const testModel = require('../model/testModel.js')

const axios = require('axios');

let controller = {}

controller.testConnection = async (req, res) => {
          try {
              const connectionStatus = await testModel.testConnection();
      
              if (connectionStatus) {
                  res.status(200).json({
                      code: 200,
                      message: 'Database connection is successful.',
                      data: connectionStatus,
                  });
              } else {
                  res.status(500).json({
                      code: 500,
                      message: 'Database connection failed.',
                      data: connectionStatus,
                  });
              }
          } catch (error) {
              res.status(400).json({
                  code: 400,
                  message: 'Error',
                  data: error,
              });
          }
      };


module.exports = controller