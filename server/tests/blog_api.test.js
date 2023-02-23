const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const { testUser, testBlogs, initateDbWithUserAndBlogs } = require("./blog_api_helper")


describe("Blog GET", () => {

  beforeEach(async () => {
    await Blog.deleteMany({})
    await User.deleteMany({})
    
    await api.post("/api/users").send(testUser)
    
    const user = await api.post("/api/login").send(testUser)
    
    const userAccessToken = user.body.accessToken
    
    for (const blog of testBlogs) {
      await api
      .post("/api/blogs")
      .send(blog)
      .set({ Authorization: `Bearer ${userAccessToken}` })
    }
  })

  test("Get request returns multiple blogs", async () => {
    const response = await api.get("/api/blogs")
    console.log(response.body)
    //expect(response.body).toHaveLength(testBlogs.length)
  })
})

describe("Blog creation as logged user", () => {
  test("Blogs can be created", async () => {})

  test("Blogs require a title", async () => {})

  test("Blogs requrie content", async () => {})
})

describe("Blog creation as non logged user", () => {
  test("Blogs can't be created", async () => {})
})

