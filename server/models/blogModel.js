const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  likes: Number,
  favs: Number,
  dateAdded: Date,
  dateUpdated: Date,
})

export default mongoose.model("Blog", blogSchema)