const logger = (req, res, next) => {
  if (process.env.NODE_ENV !== "test")
  console.log(req.method, req.url, req.body)
  next()
}

module.exports = logger