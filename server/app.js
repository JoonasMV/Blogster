const config = require("./utils/config")
const express = require("express")
const mongoose = require("mongoose")

const blogRouter = require("./routes/blogRouter")
const userRouter = require("./routes/userRouter") 

mongoose.connect(config.MONGOURL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB", err))
  
const app = express()

app.use(express.json())
app.use("/blogs", blogRouter)
app.use("/users", userRouter)


module.exports = app