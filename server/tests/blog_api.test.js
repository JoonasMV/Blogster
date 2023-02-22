const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/userModel")

describe("Blog GET", () => {
  test("Get request returns blogs", async () => {
      const response = await api.get("/api/blogs")
      
      console.log(response.text)
  })
})

describe("Blog creation as logged user", () => {
  test("Blogs can be created", async () => {

  })

  test("Blogs require a title", async () => {

  })

  test("Blogs requrie content", async () => {

  })
})

describe("Blog creation as non logged user", () => {
  test("Blogs can't be created", async () => {
    
  })
})