'use strict'
// const store = require('./..store')

const createGoalSuccess = function (response) {
  $('#message').text('good luck')
  console.log(response.goal._id)
  $('#create-goal-form').trigger('reset')
}

const createGoalFailure = function (response) {
  $('#message').text('idk nows not the time just take a nap and come back to it')
}

const indexGoalsSuccess = function (response) {
  console.log(response)
  $('#message').html('(goals.name) : (goals._id) : (goals.owner)')

  response.goals.forEach(goals => {
    const goalList = (`
      <p> ${goals.name} : ${goals._id} : ${goals.owner} </p>
  `)
    $('#message').append(goalList)
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
  })
}

const indexGoalsFailure = function (response) {
  $('#message').text('unable to index goals')
}

const hideGoalsSuccess = function (response) {
  $('#message').text('')
  $('#index-goals-button').show()
  $('#hide-goals-button').hide()
}

const hideGoalsFailure = function (response) {
  $('#message').text('something wrong')
}

const showGoalSuccess = function (response) {
  console.log('response is ' + response)
  $('#message').text(response)
}

const showGoalFailure = function (response) {
  console.log('response is ' + response)
  $('#message').text(response)
}

const updateGoalSuccess = function (response) {
  console.log('response is ' + response)
  $('#message').text('goal has been updated')
}

const updateGoalFailure = function (response) {
  console.log('response is ' + response)
  $('#message').text('goal failed to update')
}

module.exports = {
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure
}
