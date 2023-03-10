const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/posts')

// GET /api/posts
router.get('/', dataController.index, apiController.index)
// GET ALL POSTS BY POSTER /api/posts
router.get('/:id', dataController.getAllPostsByUser, apiController.index)
// GET ONE POST BY POSTER /api/posts
router.get('/poster/:id', dataController.getPostByUser, apiController.show)
// DELETE /api/posts/:id
router.delete('/:id', dataController.destroy, apiController.show)
// UPDATE /api/posts/:id
router.put('/:id', dataController.update, apiController.show)
// CREATE /api/posts
router.post('/', dataController.create, apiController.show)
// SHOW /api/posts/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router
