export default (input, len) => ({
  fails: input.length < len,
  message: (field = null) => `${!field ? 'This field' : `The ${field} field`} must be longer than ${len} characters`
})