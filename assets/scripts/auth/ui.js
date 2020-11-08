const signUpSuccess = function (response) {
  $('#message').text('thanks for signing up ' + response.user.email)
  console.log('signed up')
}

const signUpFailure = function (response) {
  $('#message').text('something went wrong')
}

const signInSuccess = function (response) {
  $('#message').text('thanks for signing in ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess
}
