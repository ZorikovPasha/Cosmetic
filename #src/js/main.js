$(function() {
  $('.item__like').on('click', function() {
    $(this).toggleClass('pressed')
  })
  
  new WOW().init();
})