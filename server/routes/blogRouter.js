const blogRouter = require("express").Router()
const Blog = require("../models/blogModel")
const authChecker = require("../utils/authChecker")

blogRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("user")
  res.json(blogs)
})

blogRouter.post("/", authChecker, async (req, res) => {
  const { title, content } = req.body
  console.log(req.user)
    const newBlog = new Blog({
      title,
      content,
      dateAdded: new Date(),
      user: req.user
    })

    try {
      const savedBlog = await newBlog.save()
      return res.json(savedBlog)
    } catch (error) {
      return res.send(error).status(400)
    }
})

module.exports = blogRouter
