const commentRouter = require("express").Router()
const Comment = require("../models/commentModel")
const Blog = require("../models/blogModel")

commentRouter.post("/:id", async (req, res) => {
  const id = req.params.id
  const blogToComment = await Blog.findById(id)

  const comment = new Comment({
    content: req.body.content,
    user: req.user,
    dateAdded: new Date()
  })

  try {
    await comment.save()
    blogToComment.comments = blogToComment.comments.concat(comment._id)
    await blogToComment.save()
  } catch (error) {
    return res.status(400).json(error.message)
  }

  res.sendStatus(201)
})

module.exports = commentRouter
