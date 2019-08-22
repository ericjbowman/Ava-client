'use strict'

const indexDisplay = require('./templates/index-gigs.handlebars')
const events = require('./events.js')
const api = require('./api.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#recordings-page').hide()
  $('#calendar-page').hide()
  events.addHandlers()
  setTimeout(function () {
    $('#spotify-player').removeClass('disappear')
    $('#blurb2').removeClass('disappear')
  }, 1000)
  setTimeout(function () {
    $('#blurb3').removeClass('disappear')
  }, 2000)
  setTimeout(function () {
    $('#blurb4').removeClass('disappear')
  }, 2500)
  api.indexGigs()
    .then((responseData) => $('.gigs-container').html(indexDisplay({ gigs: responseData.gigs })))
    .then((responseData) => console.log('We got gigs!' + responseData))
    .catch(console.log)
})
