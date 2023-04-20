import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

// Begin logo
$(document).ready(function() {
  var logo = $('#promoLogo')
    $(logo).hide();
    $(logo).fadeIn(5000) 
});
// End logo

// Begin site header hidden

  // Begin site header hidden mobile
  var prevMob = 0;
  var $window = $(window);
  var topMob = $('#topMobile');

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    topMob.toggleClass('hidden', scrollTop > prevMob);
    prevMob = scrollTop;
  });
  // End site header hidden mobile

  // Begin site header hidden desktop
  var prev = 0;
  var $window = $(window);
  var nav = $('#siteHeader');

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });
  // End site header hidden desktop
// End site header hidden

// Begin searchbar
  // Begin search toggle mobile 
    // Handle click on toggle search button
    $('#SearchToggleMobile').click(function() {
      $('#searchContainer').slideToggle('fast');
      $('#searchContainer, #SearchToggleMobile').toggleClass('active');
        return false;  
      });

    // Clicking outside the search form closes it
    $(document).click(function(event) {
      var target = $(event.target);
        if (!target.is('#SearchToggleMobile') && !target.closest('#searchContainer').length ) {
          $('#searchContainer, #SearchToggleMobile').removeClass('active');
        }
      });
  // End search toggle mobile 
  
  // Begin search toggle desktop 
    // Handle click on toggle search button
    $('#SearchToggleDesktop').click(function() {
      $('#searchContainer').slideToggle('fast');
      $('#searchContainer, #SearchToggleDesktop').toggleClass('active');
        return false;  
      });

    // Clicking outside the search form closes it
    $(document).click(function(event) {
      var target = $(event.target);
        if (!target.is('#SearchToggleDesktop') && !target.closest('#searchContainer').length ) {
          $('#searchContainer, #SearchToggleDesktop').removeClass('active');
        }
      });
  // End search toggle desktop 
// End searchbar

// Begin portfolio flip card
$('flip-card').click(function(){
    $(this).find('flip-card__inner').addClass('hover').mouseleave(function(){
        $(this).removeClass('hover');
    });
    return false;
});
// End portfolio flip card

// Begin Back To Top Button
$(document).ready(function() {

 $(document).scroll(function() {

  if ($(this).scrollTop() >300) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
 $('.scrollup').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  }); 
});
// End Back To Top Button