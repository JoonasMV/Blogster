const commentRouter = require("express").Router()
const Comment = require("../models/commentModel")
const Blog = require("../models/blogModel")
const authChecker = require("../utils/authChecker")

commentRouter.post("/:id", authChecker, async (req, res) => {
  const id = req.params.id
  const blogToComment = await Blog.findById(id)

  const comment = new Comment({
    content: req.body.content,
    user: req.user,
    blog: blogToComment,
    dateAdded: new Date()
  })

  try {
    const retComment = await comment.save()
    blogToComment.comments = blogToComment.comments.concat(comment._id)
    await blogToComment.save()
    res.status(201).json(retComment)
  } catch (error) {
      return res.status(400).json(error.message)
  }
})

commentRouter.get("/:id", async (req, res) => {
  console.log(req.params)
  const comments = await Comment.find({ blog: req.params.id })
  res.json(comments)
})

module.exports = commentRouter
