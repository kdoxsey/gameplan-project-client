const store = require('./../store')

const signUpSuccess = function (response) {
  console.log('signed up')
  $('#message').text('thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const signUpFailure = function (response) {
  $('#message').text('something went wrong')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('thanks for signing in ' + response.user.email + '. what do you want to accomplish?')
  $('#show-signup-form-button').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#goal-stuff').show()
  $('#signed-in-stuff').show()
  $('#create-goal-form').show()
  console.log(store.user)
}

const signInFailure = function (response) {
  $('#message').text('something went wrong w signing in brah')
}

const changePasswordSuccess = function (response) {
  $('#message').text('password has been changed')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#message').text('something went wrong w changin that password dude')
}

const signOutSuccess = function () {
  $('#message').text('you have signed out. sign back in to sort out your life')
  store.user = null
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#show-signup-form-button').show()
  $('#sign-in-form').show()
  $('#signed-in-stuff').hide()
  console.log('signed out')
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
