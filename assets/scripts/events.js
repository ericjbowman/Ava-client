const onClickRecordings = function () {
  $('#home-page').hide()
  $('#recordings-page').show()
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
