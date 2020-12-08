
$(document).ready(function(){
  $('.sl_carousel_snow').slick({
  	centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover:true,
    pauseOnFocus:true,
    focusOnSelect: true,
    easing: 'ease'
   
  });
 }); 


$(document).ready(function(){
  $('.checkbtn').click(function(event) {
    $('.checkbtn,.ul_checkbtn').toggleClass('active');
    $('html').toggleClass('lock');
  });
});

