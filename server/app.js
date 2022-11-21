const config = require("./utils/config")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const logger = require("./utils/logger")

const blogRouter = require("./routes/blogRouter")
const userRouter = require("./routes/userRouter") 

mongoose.connect(config.MONGOURL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB", err))
  
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)


module.exports = app