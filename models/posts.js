const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  // INITIAL POST CREATION
  poster: { type: Schema.Types.ObjectId, ref: 'User' },
  posterName: { type: String },
  posterPic: { type: String },
  image: { type: String },
  // FIGURE OUT IMAGE UPLOADS IF THERES TIME
  location: { type: String },
  caption: { type: String },
  music: { type: String },
  // AFTER POST CREATION
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }]
}, {
  timestamps: true
})

const Post = model('Post', postSchema)

module.exports = Post
