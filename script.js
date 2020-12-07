$('.sl_carousel_snow').slick({
	centerMode: true,
  centerPadding: '135px',
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover:true,
  pauseOnFocus:true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


$(document).ready(function(){
  $('.checkbtn').click(function(event) {
    $('.checkbtn,.ul_checkbtn').toggleClass('active');
    $('body').toggleClass('lock');
  });
});