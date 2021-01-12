'use strict'

const createGoalSuccess = function (response) {
  $('#message').text('new goal is ' + response.goal.name + ' and its id is ' + response.goal._id + '. good luck')
  $('form').trigger('reset')
  $('#create-goal-form').hide()
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
      <p> [id]: ${goals._id} [name]: ${goals.name} [date created]: ${goals.createdAt}</p>
  `)
    $('#goals').append(goalList)
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
    $('form').trigger('reset')
    console.log(response.goals)
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
  $('update-goal-form').hide()
}

const updateGoalFailure = function (response) {
  $('#message').text('goal failed to update')
  $('form').trigger('reset')
}

const destroyGoalSuccess = function () {
  $('#message').text('goal deleted')
  $('form').trigger('reset')
  $('#delete-goal-form').hide()
}

const destroyGoalFailure = function (response) {
  $('#message').text('goal failed to delete')
  $('form').trigger('reset')
  $('#goals').hide()
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
