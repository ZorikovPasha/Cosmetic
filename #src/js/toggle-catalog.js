$(function() {
  $('.aside__link').on('click', () => {
    $('.catalog').addClass('opened')
  
    setTimeout(() => $('.catalog__body').addClass('opened'), 200)
    $('body').addClass('lock')
  })
  
  $('.catalog__close, .catalog__list-item').on('click', () => {
    $('.catalog__body').removeClass('opened')
  
    setTimeout(() => $('.catalog').removeClass('opened'), 200)
  
    $('body').removeClass('lock')
  })
})
