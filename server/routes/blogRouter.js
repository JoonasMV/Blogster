const blogRouter = require("express").Router()
const Blog = require("../models/blogModel")

blogRouter.get("/", (req, res) => {
  res.sendStatus(200)
})

blogRouter.post("/", async (req, res) => {
  const { title, content } = req.body
  const newBlog = new Blog({
    title,
    content,
    dateAdded: new Date()
  })
  
  const savedBlog = await newBlog.save()
  res.json(savedBlog).end()

})

module.exports = blogRouter