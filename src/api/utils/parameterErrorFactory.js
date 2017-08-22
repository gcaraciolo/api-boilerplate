module.exports = (error) => {
  return {
    message: error.msg,
    parameter_name: error.param,
    type: 'invalid_parameter'
  }
}
