const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedin')

// GET all users /api/users
router.get('/', dataController.index, apiController.index)
// GET a user api/users/:id
router.get('/:id', dataController.getUser, apiController.show)
// PUT api/users/:id
router.put('/:id', dataController.update, apiController.show)
// POST /api/users
router.post('/', dataController.create, apiController.auth)
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth)
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router
