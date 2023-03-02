const supertest = require("supertest")
const app = require("../app")
const User = require("../models/userModel")
const Blog = require("../models/blogModel")
const Comment = require("../models/commentModel")
const { getAccessToken } = require("./blog_api_helper")
const api = supertest(app)

const testUsers = [
  { username: "test", password: "test" },
  { username:"test12", password: "test2" }
]
const testBlog = ({ title: "title", content: "content" })

beforeALl(async () => {
  await User.deleteMany({})
  await Blog.deleteMany({})
  await Comment.deleteMany({})
  
  for(const user in testUsers) {
    await api
      .post("/api/users/")
      .send(user)
      .expect(200)
  }
  
  const user = await api.post("/api/login").send(testUser)
  const accessToken = user.body.accessToken
  
  await api
    .post("/api/blogs")
    .send(testBlog)
    .set({ Authorization: `Bearer ${accessToken}` })

})