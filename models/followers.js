const { Schema, model } = require('mongoose')

const followerSchema = new Schema({
  follower: { type: Schema.Types.ObjectId, ref: 'User' },
  following: { type: Schema.Types.ObjectId, ref: 'User'} 
}, {
  timestamps: true
})

const Follower = model('Follower', followerSchema)

module.exports = Follower