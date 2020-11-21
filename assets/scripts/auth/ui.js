const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('thanks for signing up ' + response.user.email)
  $('form').trigger('reset')
}

const signUpFailure = function (response) {
  $('#message').text('something went wrong')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('thanks for signing in ' + response.user.email + '. what do you want to accomplish?')
  $('form').trigger('reset')
  $('#show-signup-form-button').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#buttons').show()
  $('#index-goals-button').show()
  $('#sign-out-form').show()
  $('#change-password-form').show()
}

const signInFailure = function (response) {
  $('#message').text('something went wrong w signing in brah')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('password has been changed')
  $('form').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#message').text('something went wrong w changin that password dude')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('you have signed out. sign back in to sort out your life')
  $('form').trigger('reset')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#show-signup-form-button').show()
  $('#sign-in-form').show()
  $('#create-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
  $('#change-password-form').hide()
  $('#buttons').hide()
  $('#sign-out-form').hide()
  $('#delete-goal-form').hide()
  $('#goals').text('')
  $('#hide-goals-button').hide()
  $('#change-password-form').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
