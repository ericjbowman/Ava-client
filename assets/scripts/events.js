const onClickRecordings = function () {
  $('#home-page').hide()
  $('#recordings-page').show()
  $('body').removeClass('home-background')
  $('body').addClass('recordings-background')
}

const onClickHome = function () {
  $('#home-page').show()
  $('#recordings-page').hide()
}

const addHandlers = () => {
  $('#recordings').on('click', onClickRecordings)
  $('#home').on('click', onClickHome)
}

module.exports = {
  addHandlers
}