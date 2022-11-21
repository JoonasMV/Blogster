const config = require("./utils/config")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const logger = require("./utils/logger")
const authChecker = require("./utils/authChecker")

const blogRouter = require("./routes/blogRouter")
const userRouter = require("./routes/userRouter") 
const loginRouter = require("./routes/loginRouter")

mongoose.connect(config.MONGOURL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB", err))
  
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)


module.exports = app