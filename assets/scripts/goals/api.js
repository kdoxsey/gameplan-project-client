const config = require('./../config')
const store = require('./../store')

const createNewGoal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showGoal = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/goals/' + data.goal.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexGoals = function (data) {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createNewGoal,
  showGoal,
  indexGoals
}
