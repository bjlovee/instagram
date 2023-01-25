const express = require('express')
const router = express.Router()
const { dataController, apiController} = require('../../controllers/api/likes')

// GET /api/comments
router.get('/', dataController.index, apiController.index)
// DELETE /api/comments/:id
router.delete('/:id', dataController.destroy, apiController.show)
// CREATE /api/comments - adding the id of the blog to be updated
router.post('/', dataController.create, apiController.show)

//MAY NOT BE REQUIRED
// // SHOW /api/comments/:id
// router.get('/:id', dataController.show, apiController.show)

module.exports = router