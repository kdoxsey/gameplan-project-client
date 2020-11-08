const signUpSuccess = function (response) {
  console.log('signed up')
  $('#message').text('thanks for signing up ' + response.user.email)
}

const signUpFailure = function (response) {
  $('#message').text('something went wrong')
}

const signInSuccess = function (response) {
  $('#message').text('thanks for signing in ' + response.user.email)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess
}
