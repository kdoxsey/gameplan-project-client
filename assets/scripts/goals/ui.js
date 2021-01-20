'use strict'
import dateFormat from 'dateformat'

const createGoalSuccess = function (response) {
  $('#message').text('new goal is ' + response.goal.name + ' and its id is ' + response.goal._id + '. good luck')
  $('form').trigger('reset')
  $('#create-goal-form').hide()
   console.log(response)
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}


const showGoalSuccess = function (response) {
  $('#goals').html('')
  $('form').trigger('reset')
  console.log(response)
  
//   const deleteGoal = function () {
//   console.log('delete button clicked')
// }
  const goalShow = (`
      <section class="border">
      <h1> ${response.goal.name} </h1>
      <p> ${response.goal._id} </p>
      <p> created on ${dateFormat(response.goal.createdAt, 'dddd, mmmm dS, yyyy')} </p>
      <input type="checkbox" id="checkbox" name="checkbox" value="isChecked"> <br/>
      <button onClick="{console.log('help')}">delete</button>
      </section>
      `)

      $('#goals').append(goalShow)
}


const indexGoalsSuccess = function (response) {
  console.log(response.goals.length)
  $('#goals').show()
  $('#goals').html('')
  if (response.goals.length === 0) {
    $('#goals').text('goals list is empty')
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
    $('form').trigger('reset')
  }
  response.goals.forEach(goals => {
      const goalList = (`
      <section class="container border">
      <h1> ${goals.name} </h1>
      <h3> ${goals.description} </h3>
      <h3> steps: ${goals.steps} </h3>
      <p> id: ${goals._id} </p>
      <input type="checkbox" id="checkbox" name="checkbox" value="isChecked">
      
      </section>
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
