const config = require("./utils/config")
const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOURL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB", err))

const app = express()



module.exports = app