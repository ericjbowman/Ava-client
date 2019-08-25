const showAndHideContent = function (show) {
  const pagesArr = ['home', 'recordings', 'calendar', 'bio', 'students', 'contact']
  const hiddenPagesArr = pagesArr.filter(page => page !== show)
  hiddenPagesArr.forEach(page => {
    $(`#${page}`).removeClass('selected')
    $(`#${page}-page`).hide()
    $('body').removeClass(`${page}-background`)
  })
  $(`#${show}`).addClass('selected')
  $(`#${show}-page`).show()
  $('body').addClass(`${show}-background`)
}

const onClickRecordings = function () {
  $('.navbar-toggler').attr('aria-expanded', 'false')
  $('#mvt-2').addClass('disappear')
  $('#mvt-3').addClass('disappear')
  showAndHideContent('recordings')
  const flipPlayers = function () {
    setTimeout(function () {
      $('#mvt-1').removeClass('disappear')
    }, 500)
    setTimeout(function () {
      $('#mvt-2').removeClass('disappear')
    }, 1000)
    setTimeout(function () {
      $('#mvt-3').removeClass('disappear')
    }, 1500)
  }
  $(document).ready(function () {
    flipPlayers()
  })
  // setTimeout(function () {
  //   $('#spotify-player').removeClass('disappear')
  // }, 1500)
}

const onClickStudents = function () {
  showAndHideContent('students')
}

const onClickContact = function () {
  showAndHideContent('contact')
}

const onClickCalendar = function () {
  showAndHideContent('calendar')
}

const onClickBio = function () {
  showAndHideContent('bio')
}

const onClickHome = function () {
  showAndHideContent('home')
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
  $('.navbar-toggler').on('click', adjustNavPadding)
  $('#recordings').on('click', onClickRecordings)
  $('#home').on('click', onClickHome)
  $('#calendar').on('click', onClickCalendar)
  $('#bio').on('click', onClickBio)
  $('#students').on('click', onClickStudents)
  $('#contact').on('click', onClickContact)
}

module.exports = {
  addHandlers
}
