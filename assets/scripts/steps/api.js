const config = require('./../config')
const store = require('./../store')

const createNewStep = function (data) {
  return $.ajax({
    url: config.apiUrl + '/steps',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showStep = function (data) {
  return $.ajax({
    url: config.apiUrl + '/steps/' + data.step.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexSteps = function () {
  return $.ajax({
    url: config.apiUrl + '/steps',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateStep = function (data) {
  return $.ajax({
    url: config.apiUrl + '/steps/' + data.step.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const destroyStep = function (data) {
  return $.ajax({
    url: config.apiUrl + '/steps/' + data.step.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createNewStep,
  showStep,
  indexSteps,
  updateStep,
  destroyStep
}
