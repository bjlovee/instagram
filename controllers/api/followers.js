const Follower = require('../../models/followers')
const user = require('../../models/user')
const User = require('../../models/user')

const dataController = {
  async index (req, res, next) {
    try {
      const followers = await Follower.find({})
      res.locals.data.followers = followers
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async getUserFollowers (req, res, next) {
    try {
      const userFollowers = await Follower.find({ userFollowed: req.params.id })
      res.locals.data.followers = userFollowers
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async getUserFollowing (req, res, next) {
    try {
      const userFollowing = await Follower.find({ followerUser: req.params.id })
      res.locals.data.followers = userFollowing
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },

  async create (req, res, next) {
    try {
      const follower = await Follower.create(req.body)
      // follower object passed into the followedUser
      const userFollowed = await User.findByIdAndUpdate(follower.userFollowed, {
        $push: {
          followers: follower
        }
      })
      // update the followerUsers following array with the userFollowed user object
      await User.findByIdAndUpdate(follower.followerUser, {
        $push: {
          following: follower
        }
      })
      //userFollowed)
      res.locals.data.follower = follower
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async destroy (req, res, next) {
    try {
      // find the follower passed in by its object id
      const follower = await Follower.findById(req.params.id)
      // getting the follower object stored in the followingUser
      const followedUser = await User.findByIdAndUpdate(follower.userFollowed, {
        $pull: {
          // pulling the object stored in the array matching the objectid of the follower object
          followers: { $in: [req.params.id] }
        }
      })
      await user.findByIdAndUpdate(follower.followerUser, {
        $pull: {
          following: { $in: [req.params.id] }
        }
      })
      // deleting the follower
      await Follower.deleteOne(follower)
      res.locals.data.follower = follower
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.followers)
  },
  show (req, res, next) {
    res.json(res.locals.data.follower)
  }
}

module.exports = { dataController, apiController }
