const router = require('express').Router()
const controller = require('../controller/groupController.js')

router.get('/get_all_groups', controller.getAllGroupController)
router.get('/get_group_by_id', controller.getGroupByIdController)
router.post('/create_group', controller.createGroupController)
router.put('/update_group', controller.updateGroupController)
router.delete('/delete_group', controller.deleteGroupController)

module.exports = router