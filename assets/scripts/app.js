'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const goalsEvents = require('./goals/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#message').text('sign up to sort out your life')
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#create-goal-form').hide()
  $('#create-goal-form').on('submit', goalsEvents.onCreateGoal)
  $('#index-goals').on('click', goalsEvents.onIndexGoals)
  $('#show-goal-form').on('click', goalsEvents.onShowGoal)
  $('#update-goal-form').on('submit', goalsEvents.onUpdateGoal)
  $('#signed-in-stuff').hide()
  $('#goal-stuff').hide()
  $('#hide-goals-button').hide()
  $('#hide-goals-button').on('click', goalsEvents.onHideGoals)
  $('#sign-up-form').hide()
  $('#show-signup-form-button').on('click', authEvents.onShowSignUp)
  $('#show-change-password-form-button').hide()
  $('#show-change-password-form-button').on('click', authEvents.onShowChangePassword)
})
