const mongoose = require("mongoose")

const responseSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateAdded: {
    type: Date,
  },
})

responseSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id,
    delete ret.__v
  }
})

module.exports = mongoose.model("Response", responseSchema)