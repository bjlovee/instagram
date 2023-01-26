const Like = require('../../models/likes')
const Post = require('../../models/posts')

const dataController = {
//   // Index,
//   index (req, res, next) {
//     Comment.find({}, (err, foundComments) => {
//       if (err) {
//         res.status(400).send({
//           msg: err.message
//         })
//       } else {
//         console.log(foundComments)
//         res.locals.data.comments = foundComments
//         next()
//       }
//     })
//   },
  async index (req, res, next){
    try{
      const likes = await Like.find({})
      res.locals.data.likes = likes
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async destroy (req, res, next){
    try{
      //find the like passed in
      const like = await Like.findById(req.params.id)
      //getting the like object stored in the post 
      await Post.findByIdAndUpdate(like.post, {
        $pull: {
          //pulling the object stored in the array matching the comment id
          likes: { $in: [req.params.id] }
        }
      })
      //deleting the like
      await Like.deleteOne(like)
      res.locals.data.like = like
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async create (req, res, next){
    try{
      const like = await Like.create(req.body)
      //pass in the id of the post so it can be found
      await Post.findByIdAndUpdate(like.post, {
        $push: {
          likes: like
        }
      })
      res.locals.data.like = like
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.likes)
    },
    show (req, res, next) {
      res.json(res.locals.data.like)
    }
  }

module.exports = { dataController, apiController}