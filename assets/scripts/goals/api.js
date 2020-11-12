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
    url: config.apiUrl + '/goals/' + data._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexGoals = function () {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createNewGoal,
  showGoal,
  indexGoals
}
