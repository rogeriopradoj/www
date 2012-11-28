// add dropshadow to nav on scroll
$(document).ready(function(){
  $(document).scroll(function() {
    var nav = $('nav');
    var topPos = $(document).scrollTop();

    if (topPos <= 0) {
      nav.removeClass("drop-shadow");
    } else {
      if (!nav.hasClass('drop-shadow')) {
        nav.addClass("drop-shadow");
      }
    }
  });
});

// scroll to top
$(document).ready(function(){
  $('.contact').click(function(){
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 600);
    return false;
  });
});
