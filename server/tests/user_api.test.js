const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/userModel")

const testUser = ({
  username: "test",
  password: "test"
})

describe("User creation tests", () => {

  beforeEach(async () => {
    await User.deleteMany({})
  })

  test("New users can be created", async() => {
    const usersAtStart = await api.get("/api/users")

    await api
      .post("/api/users")
      .send(testUser)
      .expect(201)
      .expect("Content-Type", /application\/json/)

    const usersAtEnd = await api.get("/api/users")
    console.log(usersAtStart.body.length)
    expect(usersAtEnd.body.length).toBe(usersAtStart.body.length + 1)
  })

  test("Same user cant be created twice", async () => {
    await api
      .post("/api/users")
      .send(testUser)

    const response = await api
      .post("/api/users")
      .send(testUser)
      .expect(400)

    expect(response.body.error).toBe("Username already taken")
  })

  test("Password required", async () => {
    await api
      .post("/api/users")
      .send({
        username: testUser.username,
        password: ""
      })
  })

  test("Username required", async () => {
    await api
    .post("/api/users")
    .send({
      username: "",
      password: testUser.password
    })
  })
})

describe("Logging in tests", () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await api
      .post("/api/users")
      .send(testUser)
  }
  )
  test("Logging in works", async () => {
    const response = await api
      .post("/api/login")
      .send(testUser)
      .expect(200)
      .expect("Content-Type", /application\/json/)
    
    expect(response.body).toHaveProperty("accessToken")
  })

  test("Error with wrong password", async () => {
    await api
      .post("/api/login")
      .send({
        username: testUser.username,
        password: "wrong"
      })
      .expect(401)
  })

  test("Error with no password", async () => {
    await api
      .post("/api/login")
      .send({
        username: testUser.username
      })
      .expect(400)
  })

  test("Error with no username", async () => {
    await api
      .post("/api/login")
      .send({
        username: "wrong"
      })
      .expect(400)
  })
})


afterAll(async () => {
  await mongoose.connection.close()
})