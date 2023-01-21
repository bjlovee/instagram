const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    image:{ data: Buffer, contentType: String },
    tags: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    location: { type: String },
    music: { type: String }
}, {
  timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment