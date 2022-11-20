const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: String,
  conent: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  likes: Number,
  favs: Number,
  dateAdded: Date,
  dateUpdated: Date,
})

module.exports = mongoose.model("Blog", blogSchema)