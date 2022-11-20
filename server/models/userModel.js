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
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  ],
  bio: String,
})

userSchema.plugin(uniqueValidator, { message : "username already taken"})

export default mongoose.model("User", userSchema)