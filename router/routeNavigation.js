const router = require('express').Router()

const users = require('./userRoute')
const blogs = require('./blogRoute')

router.use('/users', users)
router.use('/blogs', blogs)

module.exports = router