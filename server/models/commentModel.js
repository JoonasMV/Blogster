const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
    minLength: 1
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

commenSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id,
    delete ret.__v
  }
})

module.exports = mongoose.model("Comment", commentSchema)