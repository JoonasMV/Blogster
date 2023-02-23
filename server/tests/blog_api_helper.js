const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blogModel")
const User = require("../models/userModel")
 
const testUser = { username: "test", password: "test" }

const testBlogs = [
  {
    title: "title test",
    content: "content test",
  },
  {
    title: "second title",
    content: "second content",
  },
]

const createUser = async (user) => {
    await api.post("/api/users").send(user)
}

const getAccessToken = async (user) => {
  const loggedInUser = await api.post("/api/login").send(user)
  return loggedInUser.body.accessToken
}

const createBlog = async (blogToCreate) => {
  const accessToken = await getAccessToken(testUser)

  await api
    .post("/api/blogs")
    .send(blogToCreate)
    .set({ Authorization: `Bearer ${accessToken}` })
}

module.exports = {
  testUser,
  testBlogs,
  createUser,
  getAccessToken,
  createBlog
}