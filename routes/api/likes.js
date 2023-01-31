const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/likes')

// GET /api/likes
router.get('/', dataController.index, apiController.index)
// GET /api/likes
router.get('/:id', dataController.indexLikesByPost, apiController.index)
// DELETE /api/likes/:id
router.delete('/:id', dataController.destroy, apiController.show)
// CREATE /api/likes - adding the id of the blog to be updated
router.post('/', dataController.create, apiController.show)

// MAY NOT BE REQUIRED
// // SHOW /api/comments/:id
// router.get('/:id', dataController.show, apiController.show)

module.exports = router
