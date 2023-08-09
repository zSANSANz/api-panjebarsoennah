const db = require('../config/query.js')

let model = {}

const user_groups = "access_tools.user_groups";

model.getUserGroupNow = (idUser) => {
    return new Promise((resolve, rejects) => {
        db.query(`select id_group from ${user_groups} ug where ug.id_user = $1 and ug.is_selected = true;`,
        [
            idUser
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

model.getGroupsByIdUser = (idUser) => {
    return new Promise((resolve, rejects) => {
        db.query(`select * from ${user_groups} ug where ug.id_user = $1 and ug.is_selected = true;`,
        [
            idUser
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

model.getRolesGroup = () => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT groups.id_group, 
            groups.level
        FROM access_tools.groups`,
        (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.getRolesUser = (idUser) => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT user_groups.id_group, 
        groups.group_name, groups.level
        FROM access_tools.user_groups as user_groups
        LEFT JOIN access_tools.groups ON groups.id_group = user_groups.id_group
        WHERE user_groups.id_user = $1`,
        [
            idUser
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