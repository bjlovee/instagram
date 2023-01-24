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
        console.log(foundComments)
        res.locals.data.comments = foundComments
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = deletedComment
        next()
      }
    })
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
  // create (req, res, next) {
   
  //   Comment.create(req.body, (err, createdComment) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       res.locals.data.comment = createdComment
  //       next()
  //     }
  //   })
  // },
  async create (req, res, next){
    try{
      const comment = await Comment.create(req.body)
      await Post.findByIdAndUpdate(req.params.id, {
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

module.exports = { dataController, apiController}