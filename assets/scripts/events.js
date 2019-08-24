const onClickRecordings = function () {
  $('#mvt-2').addClass('disappear')
  $('#mvt-3').addClass('disappear')
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
  const flipPlayers = function () {
    $('#mvt-1').removeClass('disappear')
    setTimeout(function () {
      $('#mvt-2').removeClass('disappear')
    }, 500)
    setTimeout(function () {
      $('#mvt-3').removeClass('disappear')
    }, 1000)
  }
  $(document).ready(function () {
    flipPlayers()
  })
  // setTimeout(function () {
  //   $('#spotify-player').removeClass('disappear')
  // }, 1500)
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

const adjustNavPadding = function () {
  setTimeout(function () {
    const isExpanded = $('.navbar-toggler').attr('aria-expanded')
    console.log(isExpanded)
    if (isExpanded === 'true') {
      // alert('expanded')
      $('#students').addClass('padded-item')
    } else {
      $('#students').removeClass('padded-item')
      // alert('not expanded')
    }
  }, 1000)
}

const addHandlers = () => {
  // $('body').on('click', adjustNavPadding)
  $('.navbar-toggler').on('click', adjustNavPadding)
  $('#recordings').on('click', onClickRecordings)
  $('#home').on('click', onClickHome)
  $('#calendar').on('click', onClickCalendar)
  $('#students').on('click', onClickStudents)
}

module.exports = {
  addHandlers
}
