// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store')

const onCreateGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createNewGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.createGoalFailure)
}

const onIndexGoals = function (response) {
  event.preventDefault()
  // console.log(response)
  api.indexGoals()
    .then(ui.indexGoalsSuccess)
    .catch(ui.indexGoalsFailure)
}

const onHideGoals = function () {
  event.preventDefault()
  // console.log(response)
  api.indexGoals()
    .then(ui.hideGoalsSuccess)
    .catch(ui.hideGoalsFailure)
}

const onShowGoal = function (event) {
  event.preventDefault()
  // console.log(event)
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  api.showGoal()
    .then(ui.showGoalSuccess)
    .catch(ui.showGoalFailure)
}

const onUpdateGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateGoal(data)
    .then(ui.updateGoalSuccess)
    .catch(ui.updateGoalFailure)
}

const onDeleteGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.destroyGoal(data)
    .then(ui.destroyGoalSuccess)
    .catch(ui.destroyGoalFailure)
}
module.exports = {
  onCreateGoal,
  onIndexGoals,
  onShowGoal,
  onUpdateGoal,
  onHideGoals,
  onDeleteGoal
}
