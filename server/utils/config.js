require("dotenv").config()

const PORT = process.env.PORT
const MONGOURL = process.env.MONGOURL
const SECRET = process.env.SECRET

module.exports = { PORT, MONGOURL, SECRET }