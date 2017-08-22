const invalidParameter = (err, req, res, next) => {
  if (err.message !== 'invalid_parameter') {
    return next(err)
  }

  res.status(400).json({ errors: req.errors })
}

const notFound = (req, res, next) => {
  res.status(404).send('Not Found')
}

const serverError = (err, req, res, next) => {
  if (err instanceof Error) {
    console.log(err)
  } else {
    console.log(JSON.stringify(err, null, 2))
  }

  res.status(500).send('Server error')
}

module.exports = {
  invalidParameter,
  notFound,
  serverError
}
