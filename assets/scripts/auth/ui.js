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
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#index-goals').show()
  $('#show-goal').show()
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
  $('#sign-up-form').show()
  $('#sign-in-form').show()
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
