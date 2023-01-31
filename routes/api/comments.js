const express = require('express')
const router = express.Router()
const { dataController, apiController} = require('../../controllers/api/comments')

// GET ALL /api/comments
router.get('/', dataController.index, apiController.index)
// GET ALL /api/comments/post/:id
router.get('/post/:id', dataController.getCommentsByPost, apiController.index)
// DELETE /api/comments/:id
router.delete('/:id', dataController.destroy, apiController.show)
// UPDATE /api/comments/:id
router.put('/:id', dataController.update, apiController.show)
// CREATE /api/comments - adding the id of the blog to be updated
router.post('/', dataController.create, apiController.show)
// SHOW /api/comments/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router