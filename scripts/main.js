$(document).ready(function() {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});
// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// Force page to scroll to top on load
$(window).on('load', function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);
});
// Smooth scroll for anchor links
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  const target = this.getAttribute('href');
  if (target.length > 1 && $(target).length) {
    const yOffset = -60;
    const y = $(target).offset().top + yOffset;
    $('html, body').animate({ scrollTop: y }, 500, 'swing');
  }
});
// Fade-in elements on scroll
$(window).on('scroll', function () {
  $('.fade-in').each(function () {
    const elementTop = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom - 50) {
      $(this).addClass('visible');
    }
  });
});