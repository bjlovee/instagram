const { Schema, model } = require('mongoose')

const followerSchema = new Schema({
  followerUser: { type: Schema.Types.ObjectId, ref: 'User' },
  userFollowed: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const Follower = model('Follower', followerSchema)

module.exports = Follower
