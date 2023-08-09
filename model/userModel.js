const db = require('../config/query.js')

let model = {}

model.getUsers = () => {
    return new Promise((resolve, rejects) => {
        console.log(`select * from tb_users`)
        db.query(`SELECT * FROM tb_users;`, 
        (err, res) => {
            if (err) {
                rejects(err);
            } else {
                resolve(res);
            }
        });
    })
}

model.createUsers = (user) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tb_users SET ?', 
        [
            user
        ], 
        (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

model.getByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tb_users WHERE username = ?', [username], (err, rows) => {
            if (err) {
                return reject(err);
            }
            if (rows.length === 0) {
                return resolve(null); // User not found
            }
            resolve(rows[0]); // Return the first matching user
        });
    });
};

console.log(model)

module.exports = model 