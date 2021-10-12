$(function() {

  $('.item__like').on('click', function() {
    $(this).toggleClass('pressed')
  })


  function adjustSlidesHeight(str, child) {

    const slides = $(`.${str}`)
    let slidesHeights = []
  
    slides.each(function() {
      slidesHeights.push(this.scrollHeight)
    })

    for (let i = 0; i < slidesHeights.length; i++) {
      if ( slidesHeights[i] < Math.max(...slidesHeights) ) {
  
        $(slides[i]).children(`.${child}`).css({'height': `${ Math.max(...slidesHeights) }` })
      }
    }
    return Math.max(...slidesHeights)
  }

  const maxHeight =   adjustSlidesHeight( 'item', 'item__box' )

  $('.popular__items').find('.slick-list').css({'height' : `${ maxHeight + 62 }` })

  adjustSlidesHeight('projects__item', 'projects__item-box')

  new WOW().init();

})