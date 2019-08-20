'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
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
})
