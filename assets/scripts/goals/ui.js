'use strict'
import dateFormat from 'dateformat'
import goalsEvents from './../goals/events'

const createStepSuccess = function (response) {
  alert('hello')
}

const createGoalSuccess = function (response) {
  $("#message").show().delay(2000).fadeOut().html('added "' + response.goal.name +'" to list!')
  $('form').trigger('reset')
  $('#change-password-form').hide()
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}

const indexGoalsSuccess = function (response) {

  // display empty goals message if there are no goals
  const emptyGoals = (`
  <section class="container" id="empty-goals">
  no goals to display
  </section>
  `)
  $('#goals').empty()
  console.log(response.goals.length)
  if (response.goals.length === 0) {
    $('#goals').html(emptyGoals)
    // $('form').trigger('reset')
  }

    // iterate through the goals
    for (let i = 0; i < response.goals.length; i++) {
      console.log(response)

      const list = document.createElement('a')
      // define the goal list item as a collapsable <a> tag and the collapse out class that contains the hidden info
        const goalList= (`
        <section class="container" id="goal-border">
        <p href="#" id="show-goal">
         ${response.goals[i].name}
        </p>
      `)
      $(list).addClass('list-group-item list-group-item-action')
      $(list).attr('data-toggle', 'list')
      $(list).attr('href', '#list-' + response.goals[i]._id)
      $(list).attr('id', response.goals[i]._id)
      $(list).attr('role', 'tab')
      // $(list).html('<a>' + response.goals[i].name + '</a>')
      $(list).html(goalList)
      // add the new goal to the top of the list
      $('#goals').prepend(list)



      // const seeMore = (`
      // <section class="container"> ${response.goals[i].description}
      // </section>
      // `)
      
      // $('#goals').prepend(goalList)
      // $('form').trigger('reset')
      

      document.getElementById(response.goals[i]._id).addEventListener("click", handleClick)
      function handleClick () {
        $('#see-more').fadeIn().html('<h3>' + response.goals[i].description + '</h3>' +  '<form class="create-steps"><input type="text" name="step[text]" class="form-control" placeholder="Add a step" aria-label="Add a step"></textarea><input type="hidden" value="' + response.goals[i]._id + '" name="goal[id]" class="form-control" placeholder="Step ID" required><input type="submit" class="btn btn-primary" value="Add"></form>').show()
        $('#see-more-goal-name').fadeIn().html(response.goals[i].name).show()
        $('#create-step').on('submit', goalsEvents.onCreateStep )
      }

      
      // end of for loop
    }
  // end of index function
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
  createStepSuccess,
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  // showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
