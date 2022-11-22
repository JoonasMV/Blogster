const loginRouter = require("express").Router()
const User = require("../models/userModel")
const config = require("../utils/config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username: username })
  if (!user) return res.sendStatus(401)

  const correctPassword = await bcrypt.compare(password, user.passwordHash)
  if (!correctPassword) return res.sendStatus(401)

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const accessToken = jwt.sign(userForToken, config.SECRET)
  res.json({ accessToken, username:user.username })
})

module.exports = loginRouter
