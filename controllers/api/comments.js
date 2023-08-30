const Comment = require('../../models/comments')
const Post = require('../../models/posts')

const dataController = {
  // Index,
  index (req, res, next) {
    Comment.find({}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comments = foundComments
        next()
      }
    })
  },
  async getCommentsByPost (req, res, next) {
    try {
      const postComments = await Comment.find({ post: req.params.id }).sort({ createdAt: 'desc' })
      res.locals.data.comments = postComments
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },

  async destroy (req, res, next) {
    try {
      // find the comment passed in
      const comment = await Comment.findById(req.params.id)
      // getting the comment stored in the post
      await Post.findByIdAndUpdate(comment.post, {
        $pull: {
          // pulling the object stored in the array matching the comment id
          comments: { $in: [req.params.id] }
        }
      })
      // deleting the comment
      await Comment.deleteOne(comment)
      res.locals.data.comment = comment
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  // Update
  update (req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = updatedComment
        next()
      }
    })
  },
  // Create
  async create (req, res, next) {
    try {
      const comment = await Comment.create(req.body)
      await Post.findByIdAndUpdate(comment.post, {
        $push: {
          comments: comment
        }
      })
      res.locals.data.comment = comment
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  // Edit
  // Show
  show (req, res, next) {
    Comment.findById(req.params.id, (err, foundComment) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a comment with that ID'
        })
      } else {
        res.locals.data.comment = foundComment
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.comments)
  },
  show (req, res, next) {
    res.json(res.locals.data.comment)
  }
}

module.exports = { dataController, apiController }
