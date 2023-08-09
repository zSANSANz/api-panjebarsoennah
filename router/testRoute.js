const router = require('express').Router()
const controller = require('../controller/testController.js')

router.get('/test_connection', controller.testConnection)

module.exports = router