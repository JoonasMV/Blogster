const supertest = require("supertest")
const app = require("../app")
const User = require("../models/userModel")
const Blog = require("../models/blogModel")
const Comment = require("../models/commentModel")
const api = supertest(app)

const testUsers = [
  { username: "test", password: "test" },
  { username: "test2", password: "test2" },
]
const testBlog = { title: "title", content: "content" }

describe("Testing logged user commenting", () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await Blog.deleteMany({})
    await Comment.deleteMany({})

    for (const tUser of testUsers) {
      await api.post("/api/users/").send(tUser).expect(201)
    }

    const user = await api.post("/api/login").send(testUsers[0])
    const accessToken = user.body.accessToken

    await api
      .post("/api/blogs")
      .send(testBlog)
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)
  })

  test("Comments can be posted", async () => {
    const user = await api.post("/api/login").send(testUsers[0])
    const accessToken = user.body.accessToken

    const blog = await Blog.findOne({})

    const comment = {
      content: "comment content",
      blog: blog,
    }

    await api
      .post(`/api/comments/${blog.id}`)
      .send(comment)
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)

    const commentedBlog = await Blog.findOne({ id: blog.id })
    expect(commentedBlog.comments).toHaveLength(1)
  })

  test("Comments can be commented by the same user", async () => {
    const user = await api.post("/api/login").send(testUsers[0])
    const accessToken = user.body.accessToken

    const blog = await Blog.findOne({})

    const comment = {
      content: "comment content",
      blog: blog,
    }

    await api
      .post(`/api/comments/${blog.id}`)
      .send(comment)
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)

    const commentedBlog = await Blog.findOne({})
    const createdComment = await Comment.findOne({id:commentedBlog.comments[0]})
    const test = await Comment.findOne({ id: createdComment.id})

    await api
      .post(`/api/comments/response/${test.id}`)
      .send({ content: "content" })
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)

    const commentedComment = (await Blog.findOne({}).populate("comments")).comments[0]
    expect(commentedComment.responses).toHaveLength(1)
  })

  test("Comments can be commented by different users", async () => {
    const user = await api.post("/api/login").send(testUsers[0])
    const accessToken = user.body.accessToken

    const accessToken2 = (await api.post("/api/login").send(testUsers[1])).body.accessToken

    const blog = await Blog.findOne({})

    const comment = {
      content: "comment content",
      blog: blog,
    }

    await api
      .post(`/api/comments/${blog.id}`)
      .send(comment)
      .set({ Authorization: `Bearer ${accessToken}` })
      .expect(201)

    const commentedBlog = await Blog.findOne({})
    const createdComment = await Comment.findOne({id:commentedBlog.comments[0]})
    const test = await Comment.findOne({ id: createdComment.id})

    await api
      .post(`/api/comments/response/${test.id}`)
      .send({ content: "content" })
      .set({ Authorization: `Bearer ${accessToken2}` })
      .expect(201)

      const commentedComment = (await Blog.findOne({}).populate("comments")).comments[0]
      expect(commentedComment.responses).toHaveLength(1)
  })
})
