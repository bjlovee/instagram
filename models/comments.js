const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  comment: { type: String },
  poster: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment
