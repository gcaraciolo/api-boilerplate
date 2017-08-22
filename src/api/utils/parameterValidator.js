const parameterErrorFactory = require('./parameterErrorFactory')

const parameterValidator = (validate) => {
  return (req, res, next) => {
    validate(req)
    req.getValidationResult().then(result => {
      if (result.isEmpty()) {
        return next()
      }

      req.errors = result.useFirstErrorOnly().array().map(parameterErrorFactory)
      next(new Error('invalid_parameter'))
    }).catch(next)
  }
}

module.exports = parameterValidator
