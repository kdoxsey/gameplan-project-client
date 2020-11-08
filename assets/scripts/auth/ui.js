const signUpSuccess = function (response) {
  console.log('signed up')
  $('#message').text('thanks for signing up ' + response.user.email)
}

const signUpFailure = function (response) {
  $('#message').text('something went wrong')
}

const signInSuccess = function (response) {
  // store.user = response.user
  $('#message').text('thanks for signing in ' + response.user.email)
  $('#change-password-form').show()
}

const signInFailure = function (response) {
  $('message').text('something went wrong w signing in brah')
}

const changePasswordSuccess = function (response) {
  $('message').text('password has been changed')
}

const changePasswordFailure = function (response) {
  $('message').text('something went wrong w changin that password dude')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
