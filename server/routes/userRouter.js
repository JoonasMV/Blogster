const userRouter = require("express").Router()
const User = require("../models/userModel")

userRouter.post("/", async (req, res) => {
  const { username, email, password, bio } = req.body
  const newUser = new User({
    username,
    email,
    password,
    bio,
  })

  const addedUser = await newUser.save()
  res.json(addedUser)
})

module.exports = userRouter