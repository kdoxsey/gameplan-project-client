'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  alert('okdjfs')
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const form = event.target
// }

module.exports = {
  onSignUp
  // onSignIn
}
