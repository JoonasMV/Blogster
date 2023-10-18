const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
  responses: [this],
  dateAdded: {
    type: Date,
  },
});

commentSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id, delete ret.__v, delete ret.blog;
  },
});

module.exports = mongoose.model("Comment", commentSchema);
