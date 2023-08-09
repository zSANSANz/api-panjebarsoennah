const db = require('../config/query.js')

let model = {}

const menu = "access_tools.td_menu";

model.getMenu = (idMenu) => {
    return new Promise((resolve, rejects) => {
        db.query(`select * from ${menu} menu where menu.id = $1`,
        [
            idMenu
        ],
        (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

console.log(model)

module.exports = model 