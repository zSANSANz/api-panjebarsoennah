const db = require('../config/query.js')

let model = {}

const td_acl = "access_tools.td_acl";

model.getTdAcl = (idGroup) => {
    return new Promise((resolve, rejects) => {
        db.query(`select * from ${td_acl} acl where acl.id_role = $1`,
        [
            idGroup
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