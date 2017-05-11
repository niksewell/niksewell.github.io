// // Make it rain!
//
// INDEX.HTML

// 1. Sticky Nav
$(window).on('scroll', function() {

  var distanceScrolled = $(window).scrollTop();

  console.log('Distance scrolled is ' + distanceScrolled);

  if (distanceScrolled >= 541) {
    $('.main-nav').addClass('scrolled');
  }else {
    $('.main-nav').removeClass('scrolled');
  }
});

// 2. SETinterval images of faculty

var indexNumber = 0;

setInterval(function() {

}, 2000);
