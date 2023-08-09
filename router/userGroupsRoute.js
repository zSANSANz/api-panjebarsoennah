const router = require('express').Router()
const controller = require('../controller/userGroupsController.js')

router.get('/get_user_group_now', controller.getUserGroupNow)
router.get('/get_roles_user_by_join', controller.getRolesUser)
router.get('/get_roles_user_by_two_query', controller.getRolesUserV2)
router.get('/get_roles_user_by_two_server', controller.getRolesUserV3)

module.exports = router