$(window).scroll(function() {
  if ($(this).scrollTop() >= 700){  
    $('nav').addClass("sticky");
    $('header').addClass("header-fix");
}
else {
    $('nav').removeClass("sticky");
    $('header').removeClass("header-fix");
  }
});