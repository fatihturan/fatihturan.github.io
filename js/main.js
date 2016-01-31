/*=======================================
=            RESPONSIVE MENU            =
=======================================*/
$(document).ready(function() {
	$('.toggle-nav').click(function() {
		$('.main-nav ul').toggleClass("expanded");
		return false;
	});
});



/*========================================
=            INSTAGRAM PHOTOS            =
========================================*/
$(document).ready(function() {
	if (window.Instafeed) {
		var userFeed = new Instafeed({
				get: 'user',
				userId: '1365825',
				accessToken: '1365825.1bf2ce7.47fe6b5cbf764542a416b5089bfe31d6',
				template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>',
				sortBy: 'random',
				limit: 10,
				resolution: 'low_resolution'
		});
		userFeed.run();
	}
});



/*=====================================
=            HEADER STUFF             =
=====================================*/
$(window).scroll(function() { // Sticky Header

    if ($(window).scrollTop() > 75) {
        $('.main-nav').addClass('sticky');
    } else {
        $('.main-nav').removeClass('sticky');
    }
});





/*======================================
=            MAGNIFIC POPUP            =
======================================*/
if(jQuery().magnificPopup) {
	$('.featured-works a, .project-thumb a').click(function(e) {
	  e.preventDefault();
	  var a = this,
	    images = [],
	    data = $(a).data('images').split(',');
	    for(var i in data) {
	      images.push({'src': data[i], title: $(this).attr("data-title")});
	    }
	    $.magnificPopup.open({
	      type: 'image',
	      items: images,
				image: {
					cursor: null,
				},
	      gallery: {
	        enabled: true
	      },
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
				removalDelay: 300,
				mainClass: "mfp-fade"
	    });
	});
}



/*===============================================
=            CONTACT FORM VALIDATION            =
===============================================*/
if(jQuery().validate) {

  $('.contact-form').validate({
    errorElement: "span",
      messages: {
        name: "Please type your name",
        email: {
          required: "Please type your e-mail address",
          email: "Please type a valid e-mail address"
        },
        message: "Please type a message"
      }
  });
}
