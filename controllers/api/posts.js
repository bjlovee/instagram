const Post = require('../../models/posts')

const dataController = {
  // Index,
  index (req, res, next) {
    Post.find({}, (err, foundPosts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.posts = foundPosts
        next()
      }
    })
  },

  //Get post by user
    async getPostByUser (req, res, next){
    try{
      //finds the post by the poster ID and then sorts by the latest
      const post = await Post.find({poster:req.params.id}).sort({createdAt: 'desc'})
      //sending back only the latest post for the page index
      res.locals.data.post = post[0]
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async getAllPostsByUser (req, res, next){
    try{
      //finds the post by the poster ID and then sorts by the latest
      const posts = await Post.find({poster:req.params.id}).sort({createdAt: 'desc'})
      //sending back only the latest post for the page index
      res.locals.data.posts = posts
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },

  // Destroy
  destroy (req, res, next) {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = deletedPost
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = updatedPost
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Post.create(req.body, (err, createdPost) => {

      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = createdPost
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a post with that ID'
        })
      } else {
        res.locals.data.post = foundPost

        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.posts)
    },
    show (req, res, next) {
      res.json(res.locals.data.post)
    }
  }

module.exports = { dataController, apiController }
