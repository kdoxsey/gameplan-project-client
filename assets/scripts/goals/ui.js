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
  $('#message').html('goal : goal id')

  response.goals.forEach(goals => {
    const goalList = (`
      <p> ${goals.name} : ${goals._id} </p>
  `)
    $('#message').append(goalList)
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
  })
}

const indexGoalsFailure = function (response) {
  $('#message').text('unable to index goals')
}

const indexAllGoalsSuccess = function (response) {
  console.log(response)
  $('#message').html('goal : owner')

  response.goals.forEach(goals => {
    const goalList = (`
      <p> ${goals.name} : ${goals.owner} </p>
  `)
    $('#message').append(goalList)
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
  })
}

const indexAllGoalsFailure = function (response) {
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
  $('#message').text(response.goals)
}

const updateGoalSuccess = function (response) {
  $('#message').text('goal has been updated')
}

const updateGoalFailure = function (response) {
  $('#message').text('goal failed to update')
}

const destroyGoalSuccess = function (response) {
  $('#message').text('goal deleted')
}

const destroyGoalFailure = function (response) {
  $('#message').text('goal failed to delete')
}

module.exports = {
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  indexAllGoalsSuccess,
  indexAllGoalsFailure,
  showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
