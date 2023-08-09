const userModel = require('../model/userModel.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let controller = {}

controller.getUsers = async (req, res) => {
    try {
        const result = await userModel.getUsers()

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

controller.createUsers = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await userModel.getByUsername(username);

        if (existingUser) {
            return res.status(400).json({
                code: 400,
                message: 'Username already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username: username,
            password: hashedPassword,
        };

        const user = await userModel.createUsers(newUser);

        // Create a JWT token upon successful registration
        const token = jwt.sign({ username: user.username }, 'secretcode', { expiresIn: '1h' });

        res.status(201).json({
            code: 201,
            message: 'User registered successfully',
            token: token,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'Server Error',
            error: error.message,
        });
    }
};

controller.login = async (req, res) => {
    try {
        let username = req.body.username
        let password = req.body.password

        const user = await userModel.getByUsername(username);

        if (!user) {
            return res.status(401).json({
                code: 401,
                message: 'User not found',
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Create a JWT token
            const token = jwt.sign({ username: user.username }, 'secretcode', { expiresIn: '1h' });
            
            console.log('Login token:', token);
            res.status(200).json({
                code: 200,
                message: 'Login Success',
                token: token,
            });
        } else {
            res.status(401).json({
                code: 401,
                message: 'Invalid username or password',
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'Server Error',
            error: error.message,
        });
    }
}

module.exports = controller
