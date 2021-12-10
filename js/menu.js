var $page = $('html, body');
$('.menu ul a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

var $page = $('html, body');
$('.overlayMenu a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-50
    }, 400);
    return false;
});

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});

jQuery(document).ready(function() {
  var link = $('#mob_menu a');
  var menu = $('.overlay');
   link.on('click', function(e) {
     menu.removeClass('open');
   });
});

jQuery(document).ready(function() {
  var link = $('#mob_menu a');
  var menu = $('.navBurger');
   link.on('click', function(e) {
     menu.removeClass('active');
   });
});

jQuery(document).ready(function() {
  var link = $('#mob_menu a');
  var menu = $('body');
   link.on('click', function(e) {
     menu.removeClass('locked');
   });
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(500);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(500);
    $('html').removeClass('no-scroll');
});