'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
  $('#show-signin-form-button').hide()
  $('#show-signup-form-button').show()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
  $('#show-signup-form-button').hide()
  $('#show-signin-form-button').show()
}

const onShowSignIn = function (event) {
  event.preventDefault()
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
  $('#show-signin-form-button').hide()
  $('#show-signup-form-button').show()
}


const onShowChangePasswordForm = function (event) {
  event.preventDefault()
  $('#change-password-form').show()
  // $('#message').fadeIn().html('<form id="change-password-form"><input type="password" name="passwords[old]" placeholder="old password"><input type="password" name="passwords[new]" placeholder="new password"><input type="submit" class="btn btn-primary mb-1" value="change password"><input id="cancel" class="btn btn-dark" type="button" value="cancel"></form>')
  // $('#show-change-password-form-button').hide()
}

const onClearChangePasswordForm = function (event) {
  event.preventDefault()
  $('#change-password-form').hide()
}

const onCancelChangePassword = function (event) {
  event.preventDefault()
  $('#change-password-form').hide()
  $('#show-change-password-form-button').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowSignUp,
  onShowSignIn,
  onShowChangePasswordForm,
  onClearChangePasswordForm,
  onCancelChangePassword
}
