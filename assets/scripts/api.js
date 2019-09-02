'use strict'

const config = require('./config')
// const store = require('./store')

const indexGigs = () => {
  return $.ajax({
    url: config.apiUrl + '/gigs',
    method: 'GET'
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  indexGigs,
  signIn
}
