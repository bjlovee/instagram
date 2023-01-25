const Follower = require('../../models/followers')
const user = require('../../models/user')
const User = require('../../models/user')

const dataController = {
  async index (req, res, next){
    try{
      const followers = await Follower.find({})
      res.locals.data.followers = followers
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async create (req, res, next){
    try{
      const follower = await Follower.create(req.body)
      //follower object passed into the followedUser
      const userFollowed = await User.findByIdAndUpdate(follower.userFollowed, {
        $push: {
          followers: follower
        }
      })
      //update the followerUsers following array with the userFollowed user object
      await User.findByIdAndUpdate(follower.followerUser, {
        $push: {
          following: userFollowed
        }
      })
      res.locals.data.follower = follower
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async destroy (req, res, next){
    try{
      //find the follower passed in by its object id
      const follower = await Follower.findById(req.params.id)
      // console.log(follower)
      //getting the follower object stored in the followingUser
      const followedUser = await User.findByIdAndUpdate(follower.userFollowed, {
        $pull: {
          //pulling the object stored in the array matching the objectid of the follower object
          followers: { $in: [req.params.id] }
        }
      })
      await user.findByIdAndUpdate(follower.followerUser, {
        $pull: {
          following: { $in: [followedUser._id] }
        }
      })
      //deleting the follower
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

module.exports = { dataController, apiController}



  // async create (req, res, next){
  //   try{
  //     //creating the follower (has embedded follower user and following user id)
  //     const follower = await Follower.create(req.body)
  //     //pass in the following objectid into the user that is being followed
  //     const followingUser = await User.findByIdAndUpdate(follower.followingId, {
  //       //pushing the follower into the followers array
  //       $push: {
  //         followers: follower
  //       }
  //     })
  //     // console.log(followingUser)
  //     //finding the follower by the follower id in 'follower'
  //     await User.findByIdAndUpdate(follower.followerId, {
  //       //pushing the following user objectId into the following array
  //       $push: {
  //         following: followingUser
  //       }
  //     })
  //     res.locals.data.follower = follower
  //     next()
  //   } catch (e) {
  //     res.status(400).json(e)
  //   }
  // },
  // async destroy (req, res, next){
  //   try{
  //     //find the follower passed in
  //     const follower = await Follower.findById(req.params.id)
  //     //getting the follower object stored in the following user
  //     await User.findByIdAndUpdate(follower.follower, {
  //       $pull: {
  //         //pulling the object stored in the array matching the comment id
  //         followers: { $in: [req.params.id] }
  //       }
  //     })
  //     //deleting the follower
  //     await Follower.deleteOne(follower)
  //     res.locals.data.follower = follower
  //     next()
  //   } catch (e) {
  //     res.status(400).json(e)
  //   }
  // }