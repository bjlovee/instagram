const express = require('express')
const router = express.Router()
const { dataController, apiController} = require('../../controllers/api/followers')

//Create 
router.post('/', dataController.create, apiController.show)

// GET all followers
router.get('/', dataController.index, apiController.index)

// DELETE /api/followers/:id
router.delete('/:id', dataController.destroy, apiController.show)


module.exports = router



// GET /api/comments
// router.get('/', dataController.index, apiController.index)
//MAY NOT BE REQUIRED
// // SHOW /api/comments/:id
// router.get('/:id', dataController.show, apiController.show)
// // CREATE /api/comments - adding the id of the blog to be updated