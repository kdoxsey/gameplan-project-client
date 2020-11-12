'use strict'
// const store = require('./..store')

const createGoalSuccess = function (response) {
  $('#message').text('good luck')
  console.log(response.goal._id)
}

const createGoalFailure = function (response) {
  $('#message').text('idk nows not the time just take a nap and come back to it')
}

const indexGoalsSuccess = function (response) {
  console.log(response)
  $('#message').html('')

  response.goals.forEach(goals => {
    const goalList = (`
      <p>Goal: ${goals.name}</p>
  `)
    $('#message').append(goalList)
  })
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
