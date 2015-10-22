
// alert("js is working");

$('.hamburger').on('click', function () {
  // Slide toggle the menu //
  $('.horz-menu-holder').toggleClass('open');
  $('ul').toggleClass('open-menu');
  $('.hero') .toggleClass('open-hero')
});



/* Carousel

  start on image 1  
  when click next on menu 
  go to next image 
 or if clicked last on menu 
  go to previous image 




  Smooth Scrolling

  when click on menu item 
  scroll XX pixels down */ 
