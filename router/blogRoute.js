const router = require('express').Router()
const controller = require('../controller/blogsController.js')
const verifyToken = require('../middleware/auth.js');

router.get('/get_blogs', controller.getBlogs)
router.post('/create_blogs', verifyToken, controller.createBlogs)

module.exports = router