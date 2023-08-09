const blog = require('../model/Blog.js')

let controller = {}

controller.getBlogs = async (req, res) => {
    try {
        const result = await blog.findAll()

        res.status(200).json({
            code: 200,
            message: 'Success',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: 'Error',
            data: error,
        })
    }
}

controller.createBlogs = async (req, res) => {
    try {
        let data = {
            username: req.username,
            title: req.body.title,
            content: req.body.content,
        }

        const result = await blog.create(data)

        res.status(200).json({
            code: 200,
            message: 'Success',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: 'Error',
            data: error,
        })
    }
}

module.exports = controller