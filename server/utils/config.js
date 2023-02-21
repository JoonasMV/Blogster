require("dotenv").config()

const PORT = process.env.PORT
const MONGOURL = process.env.NODE_ENV === "test"
  ? process.env.MONGOURL_TEST
  : process.env.MONGOURL

const SECRET = process.env.SECRET

module.exports = { PORT, MONGOURL, SECRET }