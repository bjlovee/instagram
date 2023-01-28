const { Schema, model } = require('mongoose')

const likeSchema = new Schema({
  liker: { type: Schema.Types.ObjectId, ref: 'User' },
  post: { type: Schema.Types.ObjectId, ref: 'Post'} 
}, {
  timestamps: true
})

const Like = model('Like', likeSchema)

module.exports = Like