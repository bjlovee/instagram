const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  comment: { type: String },
  handle: { type: String },
  posterImage: { type: String },
  poster: { type: Schema.Types.ObjectId, ref: 'User' },
  post: { type: Schema.Types.ObjectId, ref: 'Post' }
}, {
  timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment
