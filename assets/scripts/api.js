'use strict'

const config = require('./config')
// const store = require('./store')

const indexGigs = () => {
  return $.ajax({
    url: config.apiUrl + '/gigs',
    method: 'GET'
  })
}

module.exports = {
  indexGigs
}
