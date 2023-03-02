const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const {
  testUser,
  testBlogs,
  createUser,
  getAccessToken,
  createBlog,
} = require("./blog_api_helper")

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
    expect(response.body).toHaveLength(testBlogs.length)
  })
})

describe("Blog creation as logged user", () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await Blog.deleteMany({})
    await createUser(testUser)
  })

  test("Blogs can be created", async () => {
    const accessToken = await getAccessToken(testUser)

    await api
      .post("/api/blogs")
      .send(testBlogs[0])
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)

    const blogsAtEnd = await api.get("/api/blogs")
    expect(blogsAtEnd.body).toHaveLength(1)
  })

  test("Blogs can be edited", async () => {
    await createBlog(testBlogs[0])
    const blogToEdit = await Blog.findOne({ title: testBlogs[0].title })

    const accessToken = await getAccessToken(testUser)

    await api
      .put(`/api/blogs/${blogToEdit.id}`)
      .send({ content: "edited content" })
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(200)

    const blogAfterEditing = await Blog.findOne({ id: blogToEdit.id })  
    expect(blogAfterEditing.content).not.toBe(blogToEdit.content)
  })
})

describe("Blogs get created correctly", () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await Blog.deleteMany({})
    await createUser(testUser)
  })

  test("Blogs require a title", async () => {
    const accessToken = await getAccessToken(testUser)

    const blogsWithoutTitle = [{
      title: "",
      content: "content"
    },
    {
      content: "content"
    }
  ]

  await api
    .post("/api/blogs/")
    .send(blogsWithoutTitle[0])
    .set({ Authorization: `Bearer ${accessToken}` })
    .expect(400)
    
    await api
    .post("/api/blogs/")
    .send(blogsWithoutTitle[1])
    .set({ Authorization: `Bearer ${accessToken}` })
    .expect(400)  
  })

  test("Blogs require content", async () => {
    const accessToken = await getAccessToken(testUser)

    const blogsWithoutContent = [{
      title: "title",
      content: ""
    },
    {
      title: "title"
    }
  ]

  await api
    .post("/api/blogs/")
    .send(blogsWithoutContent[0])
    .set({ Authorization: `Bearer ${accessToken}` })
    .expect(400)
    
    await api
    .post("/api/blogs/")
    .send(blogsWithoutContent[1])
    .set({ Authorization: `Bearer ${accessToken}` })
    .expect(400) 

  })
})

describe("Blog creation as non logged user", () => {
  test("Blogs can't be created", async () => {
    await api
      .post("/api/blogs/")
      .send({
        title: "title",
        content: "content"
      })
      .expect(401)
  })
})
