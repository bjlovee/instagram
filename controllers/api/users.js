// /controllers/api/users.js
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { update } = require('../../models/user')
// const { TbArrowAutofitContent } = require('react-icons/tb')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      console.log(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  },
  async getUser (req, res, next) {
    try {
      const user = await User.findById(req.params.id)
      // console.log(user)
      res.locals.data.user = user
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async update (req, res, next) {
    try {
      // console.log(req.body)
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        profilePic: req.body.profilePic,
        handle: req.body.handle
      })
      // const updatedUser = await User.findById(req.params.id)
      console.log(updatedUser)
      res.locals.data.user = updatedUser
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async index (req, res, next) {
    try {
      const users = await User.find({})
      // res.status(200).json(users)
      res.locals.data.users = users
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  },
  index (req, res) {
    res.json(res.locals.data.users)
  },
  show (req, res) {
    res.json(res.locals.data.user)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

// Helper Function //
// help function so we dont have to write token information over and over
function createJWT (user) {
  // accept a user and return a token
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
}

// // /controllers/api/users.js
// const User = require('../../models/user')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

// const checkToken = (req, res) => {
//   console.log('req.user', req.user)
//   res.json(req.exp)
// }

// const dataController = {
//   async create (req, res, next) {
//     try {
//       const user = await User.create(req.body)
//       // token will be a string
//       // console.log(req.body)
//       // console.log(user)
//       const token = createJWT(user)
//       // send back the token as a string
//       // which we need to account for
//       // in the client
//       console.log(user)
//       res.locals.data.user = user
//       res.locals.data.token = token
//       next()
//     } catch (e) {
//       res.status(400).json(e)
//     }
//   },
//   async login (req, res, next) {
//     try {
//       const user = await User.findOne({ email: req.body.email })
//       if (!user) throw new Error()
//       const match = await bcrypt.compare(req.body.password, user.password)
//       if (!match) throw new Error()
//       res.locals.data.user = user
//       res.locals.data.token = createJWT(user)
//       next()
//     } catch {
//       res.status(400).json('Bad Credentials')
//     }
//   },
//   async index (req, res, next) {
//     try{
//       const users = User.find({})
//       // res.status(200).json(users)
//       res.locals.data.users = users
//       next()
//     } catch (e) {
//       res.status(400).json(e)
//     }
//   }
// }

// const apiController = {
//   auth (req, res) {
//     res.json(res.locals.data.token)
//   }
// }

// module.exports = {
//   checkToken,
//   dataController,
//   apiController
// }

// /* -- Helper Functions -- */

// function createJWT (user) {
//   console.log(user)
//   return jwt.sign(
//     // data payload
//     { user },
//     process.env.SECRET,
//     { expiresIn: '24h' }
//   )
// }
