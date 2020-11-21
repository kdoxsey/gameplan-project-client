'use strict'
// const store = require('./..store')

const createGoalSuccess = function (response) {
  $('#message').text('new goal is ' + response.goal.name + ' and its id is ' + response.goal._id + '. good luck')
  $('form').trigger('reset')
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}

const showGoalSuccess = function (response) {
  $('#goals').text(response.goal._id + ": '" + response.goal.name + "' created at " + response.goal.createdAt)
  $('form').trigger('reset')
}

const indexGoalsSuccess = function (response) {
  $('#goals').show()
  $('#goals').html('')

  response.goals.forEach(goals => {
    const goalList = (`
      <p> ${goals._id}: '${goals.name}' created at ${goals.createdAt}</p>
  `)
    $('#goals').append(goalList)
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
    $('form').trigger('reset')
  })
}

const indexGoalsFailure = function (response) {
  $('#message').text('unable to index goals')
  $('form').trigger('reset')
}

const hideGoalsSuccess = function (response) {
  $('#goals').text('')
  $('#index-goals-button').show()
  $('#hide-goals-button').hide()
  $('form').trigger('reset')
}

const hideGoalsFailure = function (response) {
  $('#message').text('something wrong')
  $('form').trigger('reset')
}

const showGoalFailure = function (response) {
  $('#message').text('goal could not be found')
  $('form').trigger('reset')
}

const updateGoalSuccess = function (response) {
  $('#message').text('goal has been updated')
  $('form').trigger('reset')
}

const updateGoalFailure = function (response) {
  $('#message').text('goal failed to update')
  $('form').trigger('reset')
}

const destroyGoalSuccess = function (response) {
  $('#message').text('goal deleted')
  $('form').trigger('reset')
}

const destroyGoalFailure = function (response) {
  $('#message').text('goal failed to delete')
  $('form').trigger('reset')
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
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
