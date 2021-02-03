'use strict'
import dateFormat from 'dateformat'

const createGoalSuccess = function (response) {
  $("#message").show().delay(2000).fadeOut().html('added "' + response.goal.name +'" to list!')
  $('form').trigger('reset')
  $('#goals').html('')
  $('#change-password-form').hide()
  // $('#goals').html(response.goal.name)
  console.log(response.goal)
  console.log(response)
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}


// const showGoalSuccess = function (response) {
//   $('#goals').html('')
//   $('form').trigger('reset')
//   console.log(response)
//   console.log(response.goal._id)
  
//     const goalShow = (`
//     <section class="border">
//     <h1> ${response.goal.name} </h1>
//     <p> ${response.goal._id} </p>
//     <p> created on ${dateFormat(response.goal.createdAt, 'dddd, mmmm dS, yyyy')} </p>
//     <input type="checkbox" id="checkbox" name="checkbox" value="isChecked"> <br/>
//     <button onClick="{console.log('help')}">delete</button>
//     </section>
//     `)
    
//     $('#goals').append(goalShow)
//   }

  const emptyGoals = (`
      <section class="container" id="empty-goals">
      no goals to display
      </section>
      `)

      //   const emptySteps = (`
      // <section class="container" id="empty-steps">
      // no steps listed
      // </section>
      // `)
  
  const indexGoalsSuccess = function (response) {
    $('#goals').fadeIn()

    // display empty goals message if there are no goals
    if (response.goals.length === 0) {
      $('#goals').html(emptyGoals)
      $('#hide-goals-button').show()
      $('#index-goals-button').hide()
      $('form').trigger('reset')
    }

    // iterate through the goals
    for (let i = 0; i < response.goals.length; i++) {
      console.log(goals[i])

    // define the goal list item as a collapsable <a> tag and the collapse out class that contains the hidden info
      const goalList= (`
      <section class="container" id="goal-border">
      <a href="#" data-target="#show-steps" id="show-goal" data-toggle="collapse">
       ${response.goals[i].name}
      </a>
      </section>
     <div class="collapse out" id="show-steps">
     <p>
      ${response.goals[i].description}
     </p>
      </div>
    `)

      // const seeMore = (`
      // <section class="container">
      // <h1 id="goal-name">${goals.name}</h1>
      // <h2 id="goal-description">${goals.description}</h2>
      // <p id="date-created"> Created on ${dateFormat(goals.createdAt, 'dddd, mmmm dS, yyyy')} </p>
      // </section>
      // `)
      
      $('#goals').prepend(goalList)
      $('form').trigger('reset')
      // $('#see-more').html(seeMore).hide()
    }
  
    
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
  // showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
