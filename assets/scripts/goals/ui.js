'use strict'
// const store = require('./..store')

const createGoalSuccess = function (response) {
  $('#message').text('good luck')
  console.log(response)
}

const createGoalFailure = function (response) {
  $('#message').text('idk nows not the time just take a nap and come back to it')
}

const indexGoalsSuccess = function (response) {
  $('#message').text(response.goals)
}

const indexGoalsFailure = function (response) {
  $('#message').text('unable to index goals')
}

const showGoalSuccess = function (response) {
  console.log('response is ' + response)
  $('#message').text(response)
}

const showGoalFailure = function (response) {
  console.log('response is ' + response)
  $('#message').text(response)
}

module.exports = {
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  showGoalSuccess,
  showGoalFailure
}
