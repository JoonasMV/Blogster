const config = require("./utils/config")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const logger = require("./utils/logger")
const authChecker = require("./utils/authChecker")

const blogRouter = require("./routes/blogRouter")
const userRouter = require("./routes/userRouter") 
const loginRouter = require("./routes/loginRouter")
const commentRouter = require("./routes/commentRouter")

mongoose.connect(config.MONGOURL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB", err))
  
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("build"))
app.use(logger)

app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/comments", commentRouter)


module.exports = app