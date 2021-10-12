
$(window).resize(function(event) {
  adaptive_header();
});

function adaptive_header() {
	let w = $(window).outerWidth();

  if ( w < 993 ) {
    $('.menu').appendTo('.mob-menu__body')
  }

  if ( w < 621 ) {
    $('.header__phone').appendTo('.mob-menu__body')
    $('.contact__btn').appendTo('.contact__body')
  }

  if ( w < 401 ) {
    $('.logo').appendTo('.mob-menu__body')
  }


}
adaptive_header();