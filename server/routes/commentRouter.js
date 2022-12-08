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
    dateAdded: new Date(),
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

commentRouter.post("/response/:id", authChecker, async (req, res) => {
  console.log(req.user)
  const id = req.params.id
  const commentToRespond = await Comment.findById(id)

  const response = new Comment({
    content: req.body.content,
    user: req.user,
    dateAdded: new Date(),
  })

  console.log(response)

  try {
    const savedResponse = await response.save()
    commentToRespond.responses = commentToRespond.responses.concat(
      savedResponse._id
    )
    await commentToRespond.save()
    res.sendStatus(201)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

commentRouter.get("/blog/:id", async (req, res) => {
  //console.log(req.query)
  const comments = await Comment.find({ blog: req.params.id })
    .populate("user")
    //.populate({ path: "responses", model: "Comment" })
    .skip(req.query.minDoc)
    .limit(req.query.maxDoc)
  res.json(comments)
})

commentRouter.get("/:id", async (req, res) => {
  try {
    const commentResponse = await Comment.findOne({
      _id: req.params.id,
    }).populate("user", "username")
    res.json(commentResponse)
  } catch (ex) {}
})

module.exports = commentRouter
