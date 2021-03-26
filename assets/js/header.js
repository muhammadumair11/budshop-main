$(window).scroll(function() {
  if ($(this).scrollTop() >= 636){  
    $('nav').addClass("sticky");
    $('header').addClass("header-fix");
}
else {
    $('nav').removeClass("sticky");
    $('header').removeClass("header-fix");
  }
console.log($(this).scrollTop());
});