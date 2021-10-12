$('.aside__link').on('click', function() {
  $('.catalog').addClass('shown')
})

$('.aside__link').on('click', function() {
  $('.catalog').addClass('opened')

  setTimeout( function() {
    $('.catalog__body').addClass('opened')
  }, 200)
  $('body').addClass('lock')
})

$('.catalog__close').on('click', function() {
  $('.catalog__body').removeClass('opened')

  setTimeout( function() {
    $('.catalog').removeClass('opened')
  }, 200)

  $('body').removeClass('lock')
})