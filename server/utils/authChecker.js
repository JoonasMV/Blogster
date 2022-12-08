const jwt = require("jsonwebtoken")
const config = require("../utils/config")
const User = require("../models/userModel")

const authChecker = async (req, res, next) => {
  try {
    //console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1]
    const userFromToken = jwt.verify(String(token), config.SECRET)
    req.user = await User.findById(userFromToken.id)
    next()
  } catch (error) {
    console.log(error)
    return res.status(403).json({error: "token error"})
  }
}

module.exports = authChecker