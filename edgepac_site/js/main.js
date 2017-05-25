// // Make it rain!
//
// INDEX.HTML

// 1. Sticky Nav
// When window is scrolled 541, add class .scrolled to main-nav, else remove class
$(window).on('scroll', function() {

  var distanceScrolled = $(window).scrollTop();

  console.log('Distance scrolled is ' + distanceScrolled);

  if (distanceScrolled >= 541) {
    $('.main-nav').addClass('scrolled');
  }else {
    $('.main-nav').removeClass('scrolled');

  }
});

// NOT WORKING--When click on EDGE logo, scroll to 541
//   $('.edge-logo').on('click', function(e) {
//       e.preventDefault();
//   $( window ).scroll(541);
//   });
//
//   $('.edge-logo').on('click', function(e) {
// //   // prevent the standard link operation on click
//   e.preventDefault();
// //   // use the href of the link to identify what
// //   // section to scroll to
//   var thisTarget = $(this).attr('href');
// //   // // get that section's top offset
//   var targetOffset = $(thisTarget).offset().top;
// //   // // use jQuery.animate() to animate the body's
// //   // // scrollTop to the targetOffest
//   $('body').animate({
//     scrollTop: targetOffset
//   }, 541);
// });

// 2. SETinterval images of faculty

var images = [
  {
    src: "img/tovaris.jpg"
  },
  {
    src: "img/sabrina.jpg"
  },
  {
    src: "img/damien.jpg"
  },
  {
    src: "img/nicole.jpg"
  },
  {
    src: "img/dean.jpg"
  },
];

var indexNumber = 0;

setInterval(function () {
  	console.log(indexNumber);

  	if (indexNumber < 4) {
  		indexNumber += 1;
  	} else {
  		indexNumber = 0;
  	}

    $('#faculty-carousel').attr('src', images[indexNumber].src);

}, 2000);

//FACULTY BUTTONS
//When the #cj-button is click on, only show images with .contemp class, hide '.hip-hop .jazz-funk .ballet'

$('#cj-button').on('click', function() {
  $('.contemp').fadeIn(300);
  console.log("clicked");
    $('.hip-hop , .jazz-funk , .ballet').hide();
});

$('#hiphop-button').on('click', function() {
  $('.hip-hop').fadeIn(300);
  $('.contemp , .jazz-funk , .ballet').hide();
});

$('#jf-button').on('click', function() {
  $('.jazz-funk').fadeIn(300);
  $('.contemp , .hip-hop , .ballet').hide();
});

$('#ballet-button').on('click', function() {
  $('.ballet').fadeIn(300);
  $('.contemp , .hip-hop , .jazz-funk').hide();
});

$('#allfaculty-button').on('click', function() {
  $('.ballet , .contemp , .hip-hop , .jazz-funk').fadeIn(300);
});

//Schedule Page JS by day
// When click on day, show schedule for day clicked on, hide schedule for else

$('#mon-sched').on('click', function() {
  $('.mon-class').fadeIn(300);
  $('.tues-class , .wed-class , .thurs-class, .fri-class').hide();
});

$('#tues-sched').on('click', function() {
  $('.tues-class').fadeIn(300);
  $('.mon-class , .wed-class , .thurs-class, .fri-class').hide();
});

$('#wed-sched').on('click', function() {
  $('.wed-class').fadeIn(300);
  $('.mon-class , .tues-class , .thurs-class, .fri-class').hide();
});

$('#thurs-sched').on('click', function() {
  $('.thurs-class').fadeIn(300);
  $('.mon-class , .tues-class , .wed-class, .fri-class').hide();
});

$('#fri-sched').on('click', function() {
  $('.fri-class').fadeIn(300);
  $('.mon-class , .tues-class , .wed-class, .thurs-class').hide();
});

$('#all-sched').on('click', function() {
  $('.mon-class , .tues-class , .wed-class, .thurs-class , .fri-class').fadeIn(300);
});

//FAQS

// 3. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2

$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();
$('#answer4').hide();

$('#question2').on('click', function () {
  $('#answer2').toggle();
  $('#answer1 ,  #answer3 , #answer4').slideUp();
  $(li).removeClass('faqs-active');
  $('#question2').addClass('faqs-active');
});

$('#question3').on('click', function() {
  $('#answer3').toggle();
  $('#answer1 , #answer2 , #answer4').slideUp();
  $(li).removeClass('faqs-active');
  $('#question3').addClass('faqs-active');
});

$('#question4').on('click', function() {
  $('#answer4').toggle();
  $('#answer1 , #answer2 , #answer3').slideUp();
  $(li).removeClass('faqs-active');
  $('#question2').addClass('faqs-active');
});

$('#question1').on('click', function() {
  $('#answer1').toggle();
  $('#answer2 , #answer3 , #answer4').slideUp();
  $(li).removeClass('faqs-active');
  $('#question1').addClass('faqs-active');
});

// FAQS pg

// When click on a href "Drop us a line" in #faqs-pg, show form
$('#form').on('click', function() {

  console.log("clicked");
  $('.contact-us').toggle();
});
