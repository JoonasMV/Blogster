const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/userModel")


describe("User creation tests", () => {
  beforeEach(async () => {
    await User.deleteMany({})
  })

  test("New users can be created", async() => {
    const usersAtStart = await api.get("/api/users")

    await api
      .post("/api/users")
      .send({ 
        username: "test",
        password: "test"
      })
      .expect(201)
      .expect("Content-Type", /application\/json/)

    const usersAtEnd = await api.get("/api/users")
    console.log(usersAtStart.body.length)
    expect(usersAtEnd.body.length).toBe(usersAtStart.body.length + 1)
  })

  test("Same user cant be created twice", async () => {
    const testUser = { username: "test", password: "test"}

    await api
      .post("/api/users")
      .send(testUser)

    const response = await api
      .post("/api/users")
      .send(testUser)
      .expect(400)

    expect(response.body.error).toBe("Username already taken")
  })

  test("Username required", async () => {
    //test here
  })

  test("Password required", async () => {

  })
})

describe("Logging in tests", () => {
  test("Logging in works", async () => {

  })

  test("Error with wrong password", async () => {

  })

  test("Error with no password", async () => {
  
  })

  test("Error with non existant username", async () => {

  })

})


afterAll(async () => {
  await mongoose.connection.close()
})