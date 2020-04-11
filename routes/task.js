const router = require('express').Router();
const TaskController = require('../contollers/task.controllers')

// get
router.get('/',TaskController.getAllTask)

// post
router.post('/', TaskController.setTask)

// delete
router.delete('/:id', TaskController.delete)



module.exports=router;