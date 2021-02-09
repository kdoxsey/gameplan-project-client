const store = require('./../store')
const goalsEvents = require('./../goals/events')

const signUpSuccess = function (response) {
  // $("#message").show().delay(2000).fadeOut().html('added "' + response.goal.name +'" to list!')
  store.user = response.user
  const str = response.user.email
  const nameReplace = str.replace(/@.*$/,"")
  const name = nameReplace !== str ? nameReplace : null
  $('#sign-in').hide().fadeIn().text('thanks for signing up,  ' + name.toLowerCase() + '! Sign in to get started.').fadeIn()
  // $('#message').text('thanks for signing up ' + response.user.email)
  // goalsEvents.onIndexGoals()

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
  $('#message').text('hello, ' + name.toLowerCase() + '!').fadeIn().delay(2000).fadeOut()
  // $('.nav-item dropdown').show()
  $('#signed-in-as').fadeIn().html(store.user.email)
  // $('form').trigger('reset')
  // $('#toggle-signup-signin').hide()
  // $('#sign-up-form').hide()
  // $('#sign-in-form').hide()
  $('#authorization').hide()
  $('#create-goal-form').fadeIn()
  $('.nav-link').fadeIn()
  $('#goal-stuff').fadeIn()
  $('#goals').fadeIn()
  goalsEvents.onIndexGoals()
}

const signInFailure = function (response) {
  $('#message').text('unable to sign in')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text("your password's been changed!").fadeIn().delay(2000).fadeOut()
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#show-change-password-form-button').show()
}

const changePasswordFailure = function (response) {
  $('#message').text('unable to change password')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-in').text('sign in')
  $('form').trigger('reset')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  // $('#toggle-signup-signin').show()
  // $('#sign-in-form').show()
  $('#authorization').show()
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
  $('.nav-link').hide()
  $('#see-more').hide()
  $('#see-more-navbar').hide()
  $('#goals').hide()
  $('#signed-in-as').hide()
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
