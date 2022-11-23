const userRouter = require("express").Router()
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

userRouter.get("/", async (req, res) => {
  const users = await User.find({}).populate("blogs")
  res.json(users)
})

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id).populate("blogs")
  console.log(user)
  res.json(user)
})

userRouter.post("/", async (req, res) => {
  const { username, email, password, bio } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  
  const newUser = new User({
    username,
    email,
    passwordHash,
    bio,
  })

  const addedUser = await newUser.save()
  res.json(addedUser)
})

module.exports = userRouter