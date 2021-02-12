'use strict'
import dateFormat from 'dateformat'
import goalsEvents from './../goals/events'

const createStepSuccess = function (response) {
  $('form').trigger('reset')
  const lastArray = (response.goal.step.length - 1)
  const countArray = (response.goal.step.length)
  console.log(response.goal.step[lastArray].text)
  $('#see-more').append('<p>' + countArray + ': ' + response.goal.step[lastArray].text)
  $("#message").show().delay(2000).fadeOut().html('added "' + response.goal.step[lastArray].text +'" to ' + response.goal.name)
  }

// const indexStepsSuccess = function (response) {
//   $('form').trigger('reset')
//   for (let i = 0; i < response.goals.step[i].length; i++) {
//     console.log(response.goals.step[i].length)
//   }
// }

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
      // console.log(response)

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
      // $('#see-more').append(stepList)

      document.getElementById(response.goals[i]._id).addEventListener("click", handleClick)
      
      
      let count = 1
      function handleClick () {
        
        $('#see-more').hide().fadeIn().html('<form class="create-steps"><input type="text" name="step[text]" class="form-control" placeholder="Add a step" aria-label="Add a step"><input type="hidden" value="' + response.goals[i]._id + '" name="step[goalId]" class="form-control" placeholder="goal ID" required><input type="submit" class="btn btn-primary" value="Add"></form>').show()
        $('#see-more-navbar').fadeIn()
        $('#see-more-goal-name').hide().fadeIn().html(response.goals[i].name).show()
        $('#see-more-goal-description').hide().fadeIn().html(response.goals[i].description).show()
        // console.log(response.goals[i].step.text)

        let count = 1
        for (let j = 0; j < response.goals[i].step.length; j++) {
          // if (response.goals[i].step.length === 0) {
          //   $('#see-more').hide().fadeIn().html('<p>no steps to display</p>').show()
          // }

          $('#see-more').append(count + ': ' + response.goals[i].step[j].text + '</p>')

          console.log(response.goals[i].step[j].text + ' is a step')
        // }
        count += 1
      }
      $('#create-steps').on('submit', goalsEvents.onCreateStep)
      
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
