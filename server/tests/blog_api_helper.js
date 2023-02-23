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

const initateDbWithUserAndBlogs = async () => {


}

module.exports = {
  testUser,
  testBlogs,
  initateDbWithUserAndBlogs
}