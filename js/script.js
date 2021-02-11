$(document).ready(function () {
  $('.header__btn_burger').click(function () {
    $('.header__btn_burger').toggleClass('open-menu')
    $('.header__menu').slideToggle(1000)
  })
})
