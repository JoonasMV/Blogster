const loginRouter = require("express").Router()
const User = require("../models/userModel")
const config = require("../utils/config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body

  if ( username === undefined || password === undefined) 
    return res.sendStatus(400)

  const user = await User.findOne({ username: username })
  if (!user) return res.status(401).json({ error: "Wrong username or password" })

  const correctPassword = await bcrypt.compare(password, user.passwordHash)
  if (!correctPassword) return res.status(401).json({ error: "Wrong username or password" })

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const accessToken = jwt.sign(userForToken, config.SECRET)
  user.accessToken = accessToken
  res.json({ accessToken, username: user.username, id: user._id })
})

module.exports = loginRouter
