'use strict'

const authEvents = require('./auth/events')
const goalsEvents = require('./goals/events')
// const stepsEvents = require('./steps/events')


$(() => {
  // default hiddens
  $('#goal-stuff').hide()
  $('.nav-link').hide()
  $('#message').hide()
  $('#show-goal-button').hide()
  $('#sign-up-form').hide()
  $('#buttons').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#create-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
  $('#delete-goal-form').hide()
  $('#delete-goal-button').hide()
  $('#update-goal-button').hide()
  $('#show-signin-form-button').hide()
  $('#see-more').hide()

  // auth events
  $('#navbarDropdown').on('click', authEvents.onClearChangePasswordForm)
  $('#change-password').on('click', authEvents.onShowChangePasswordForm)
  $('#cancel').on('click', authEvents.onCancelChangePassword)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  // toggle the sign-up/sign-in forms
  $('#show-signup-form-button').on('click', authEvents.onShowSignUp)
  $('#show-signin-form-button').on('click', authEvents.onShowSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // goals
  $('#create-goal-form').on('submit', goalsEvents.onCreateGoal)
  // $('#delete-goal-button').on('click', goalsEvents.onShowDeleteGoalForm)
  // $('#show-goal-button').on('click', goalsEvents.onShowShowGoalForm)
  // $('#update-goal-button').on('click', goalsEvents.onShowUpdateGoalForm)


  // $('#show-goal-form').on('submit', goalsEvents.onShowGoal)
  // $('#show-goal').on('click', goalsEvents.onShowGoal)
  // $('#update-goal-form').on('submit', goalsEvents.onUpdateGoal)
  // $('#cancel-create-goal').on('click', goalsEvents.onCancelCreateGoal)
  // $('#delete-goal-form').on('submit', goalsEvents.onDeleteGoal)

  //steps
  $('#see-more').on('submit', goalsEvents.onCreateStep)
  // $('#create-step-form').on('submit', stepsEvents.onCreateStep)
  // $('#hide-steps-button').hide()
  // $('#index-steps-button').on('click', stepsEvents.onIndexSteps)
  // $('#index-steps-button').hide()
  // $('#hide-steps-button').on('click', stepsEvents.onHideSteps)
  // $('#hide-steps-button').hide()
  // $('#show-step-form').on('submit', stepsEvents.onShowStep)
  // $('#show-step-form').hide()
  // $('#update-step-form').on('submit', stepsEvents.onUpdateStep)
  // $('#update-step-form').hide()
  // $('#delete-step-form').on('submit', stepsEvents.onDeleteStep)
  // $('#delete-step-form').hide()
  // show GOAL crud forms
    // hide the STEP crud forms
  // $('#create-step-form').hide()
  // $('#show-step-form').hide()
  // $('#update-step-form').hide()
  // $('#delete-step-form').hide()
  // show STEP crud forms
  // $('#create-step-button').on('click', stepsEvents.onShowCreateStepForm)
  // $('#create-step-button').hide()
  // $('#delete-step-button').on('click', stepsEvents.onShowDeleteStepForm)
  // $('#delete-step-button').hide()
  // $('#show-step-button').on('click', stepsEvents.onShowShowStepForm)
  // $('#show-step-button').hide()
  // $('#update-step-button').on('click', stepsEvents.onShowUpdateStepForm)
  // $('#update-step-button').hide()
})
