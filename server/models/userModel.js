const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    required: [true, "username required"],
    minLength: 3,
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, 'invalid email']
  },
  passwordHash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    }
  ],
  bio: String,
})

userSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id,
    delete ret.__v
  }
})

module.exports = mongoose.model("User", userSchema)