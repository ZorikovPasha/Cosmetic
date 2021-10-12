
  $('.popular__items').slick({
    slidesToShow: 6,
    infinite: false,
    lazyLoad: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M98 72.7245L97.2453 72L91 78L97.2453 84L98 83.2755L92.5094 78L98 72.7245Z" fill="#fff"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M92 72.7245L92.7547 72L99 78L92.7547 84L92 83.2755L97.4906 78L92 72.7245Z" fill="#fff"/></svg></button>',

    responsive: [
      {
        breakpoint: 1221,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 621,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }

    ]
  })

  $('.brands__items').slick({
    slidesToShow: 5,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M98 72.7245L97.2453 72L91 78L97.2453 84L98 83.2755L92.5094 78L98 72.7245Z" fill="#fff"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M92 72.7245L92.7547 72L99 78L92.7547 84L92 83.2755L97.4906 78L92 72.7245Z" fill="#fff"/></svg></button>',
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 2,
        }
      },

    ]

  })

  $('.projects__items').slick({
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M98 72.7245L97.2453 72L91 78L97.2453 84L98 83.2755L92.5094 78L98 72.7245Z" fill="#fff"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="30" height="30" viewBox="80 63 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="95" cy="78" r="15" fill="#AA8453"/><path d="M92 72.7245L92.7547 72L99 78L92.7547 84L92 83.2755L97.4906 78L92 72.7245Z" fill="#fff"/></svg></button>',

    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  })