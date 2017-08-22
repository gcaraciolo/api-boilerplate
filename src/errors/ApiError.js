const errorFormat = (message) => {
  return { message: message }
}

class ApiError extends Error {
  constructor (messages = []) {
    super()
    this.errors = messages.map(errorFormat)
  }
}

module.exports = ApiError
