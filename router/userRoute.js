const router = require('express').Router()
const controller = require('../controller/usersController.js')
const verifyToken = require('../middleware/auth.js');

router.get('/get_users', verifyToken , controller.getUsers)
router.post('/create', controller.createUsers)
router.post('/login', controller.login)

module.exports = router