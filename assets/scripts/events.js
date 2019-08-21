const onClickRecordings = function () {
  $('#home').removeClass('selected')
  $('#students').removeClass('selected')
  $('#calendar').removeClass('selected')
  $('#recordings').addClass('selected')
  $('#home-page').hide()
  $('#students-page').hide()
  $('#calendar-page').hide()
  $('#recordings-page').show()
  $('body').removeClass('home-background')
  $('body').removeClass('students-background')
  $('body').removeClass('calendar-background')
  $('body').addClass('recordings-background')
  setTimeout(function () {
    $('#mvt-2').removeClass('disappear')
  }, 500)
  setTimeout(function () {
    $('#mvt-3').removeClass('disappear')
  }, 1000)
  setTimeout(function () {
    $('#spotify-player').removeClass('disappear')
  }, 1500)
}

const onClickStudents = function () {
  $('#home').removeClass('selected')
  $('#recordings').removeClass('selected')
  $('#calendar').removeClass('selected')
  $('#students').addClass('selected')
  $('#home-page').hide()
  $('#recordings-page').hide()
  $('#calendar-page').hide()
  $('#students-page').show()
  $('body').removeClass('home-background')
  $('body').removeClass('recordings-background')
  $('body').removeClass('calendar-background')
  $('body').addClass('students-background')
}

const onClickCalendar = function () {
  $('#home').removeClass('selected')
  $('#students').removeClass('selected')
  $('#recordings').removeClass('selected')
  $('#calendar').addClass('selected')
  $('#home-page').hide()
  $('#recordings-page').hide()
  $('#students-page').hide()
  $('#calendar-page').show()
  $('body').removeClass('home-background')
  $('body').removeClass('recordings-background')
  $('body').removeClass('students-background')
  $('body').addClass('calendar-background')
}

const onClickHome = function () {
  $('#recordings').removeClass('selected')
  $('#students').removeClass('selected')
  $('#calendar').removeClass('selected')
  $('#home').addClass('selected')
  $('#recordings-page').hide()
  $('#calendar-page').hide()
  $('#students-page').hide()
  $('#home-page').show()
  $('body').removeClass('recordings-background')
  $('body').removeClass('calendar-background')
  $('body').removeClass('students-background')
  $('body').addClass('home-background')
}

const addHandlers = () => {
  $('#recordings').on('click', onClickRecordings)
  $('#home').on('click', onClickHome)
  $('#calendar').on('click', onClickCalendar)
  $('#students').on('click', onClickStudents)
}

module.exports = {
  addHandlers
}
