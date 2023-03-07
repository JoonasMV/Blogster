const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  favourites: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  dateAdded: Date,
  dateUpdated: Date,
})

blogSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id, delete ret.__v, delete ret.comments
  },
})

module.exports = mongoose.model("Blog", blogSchema)
