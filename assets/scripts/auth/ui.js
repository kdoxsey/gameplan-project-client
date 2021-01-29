const store = require('./../store')
const goalsEvents = require('./../goals/events')

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
  const str = response.user.email
  const nameReplace = str.replace(/@.*$/,"")
  const name = nameReplace !== str ? nameReplace : null
  $('#message').text('thanks for signing in ' + name.toUpperCase() + '. what do you want to accomplish?')
  $('.nav-item dropdown').show()
  // $('#message').text('thanks for signing in ' + response.user.email + '. what do you want to accomplish?')
  $('form').trigger('reset')
  $('#show-signup-form-button').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#buttons').show()
  $('#create-goal-form').show()
  // $('#index-goals-button').show()
  $('#sign-out-button').show()
  $('#show-change-password-form-button').show()
  console.log('token is ' + store.user.token)
  console.log(response.user._id)
  goalsEvents.onIndexGoals()
}

const signInFailure = function (response) {
  $('#message').text('unable to sign in')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('password has been changed')
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#show-change-password-form-button').show()
}

const changePasswordFailure = function (response) {
  $('#message').text('unable to change password')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('you have signed out. sign back in to sort out your life')
  $('form').trigger('reset')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
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
  $('#show-change-password-form-button').hide()
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
