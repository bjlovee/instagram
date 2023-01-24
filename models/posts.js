const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    image:{ data: Buffer, contentType: String },
    tags: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    location: { type: String },
    music: { type: String }
}, {
  timestamps: true
})

const Post = model('Post', postSchema)

module.exports = Post