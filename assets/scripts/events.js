const onClickRecordings = function () {
  $('#home-page').hide()
  $('#students-page').hide()
  $('#calendar-page').hide()
  $('#recordings-page').show()
  $('body').removeClass('home-background')
  $('body').removeClass('students-background')
  $('body').removeClass('calendar-background')
  $('body').addClass('recordings-background')
}

const onClickStudents = function () {
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
