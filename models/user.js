const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_ROUNDS = 6

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },
  handle: { type: String, required: true, unique: true },
  profilePic: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: 'Follower' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password
      return ret
    }
  }
})
// A user model is created for each visitor to the site that is not admin.
userSchema.pre('save', async function (next) {
  // 'this' is the use document
  if (!this.isModified('password')) return next()
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = mongoose.model('User', userSchema, 'users')
