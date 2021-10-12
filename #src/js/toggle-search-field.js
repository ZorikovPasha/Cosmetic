$('.aside__form-btn').on('click', function(e) {

  e.stopPropagation()
  if ( $('.input-wrapper').hasClass('shown') ) {
    $('.input-wrapper').removeClass('shown') 

  } else {
    e.preventDefault()
    $('.input-wrapper').addClass('shown') 

  }
})


$(document).on('click', function(e) {
    
  setTimeout( function() {
    if ( $('.input-wrapper').hasClass('shown') && $(e.target).closest('.input-wrapper').length == 0 ) {
      $('.input-wrapper').removeClass('shown')
    }
  
  }, 100)
})