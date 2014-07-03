/*=======================================
=            RESPONSIVE MENU            =
=======================================*/
$(document).ready(function() {
	$('.toggle-nav').click(function() {
		$('.main-nav ul').toggleClass("expanded");
		return false;
	});
});



/*=====================================
=            HEADER STUFFS            =
=====================================*/

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 75) {
        $('.main-nav').addClass('sticky');
    } else {
        $('.main-nav').removeClass('sticky');
    }
});

// Medium Like Scroll Up Bar
$('.main-nav').scrollupbar();

// Smooth Scrolling from: http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



/*======================================
=            MAGNIFIC POPUP            =
======================================*/
if(jQuery().magnificPopup) {
// Add it after jquery.magnific-popup.js and before first initialization code
$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Kapat', // Alt text on close button
  tLoading: 'Yükleniyor...', // Text that is displayed during loading. Can contain %curr% and %total% keys
  gallery: {
    tPrev: 'Önceki', // Alt text on left arrow
    tNext: 'Sonraki', // Alt text on right arrow
    tCounter: '%curr% / %total%' // Markup for "1 of 7" counter
  },
  image: {
    tError: '<a href="%url%">Dosya</a> yüklenemedi.' // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">İçerik</a> yüklenemedi.' // Error message when ajax request failed
  }
});

$('.thumbs li a').click(function(e) {
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
      gallery: {
        enabled: true
      }
    });
})
}


/*===============================================
=            CONTACT FORM VALIDATION            =
===============================================*/
if(jQuery().validate) {

  $('.contact-form').validate({
    errorElement: "span",
      messages: {
        name: "Lütfen adınızı ve soyadınızı giriniz.",
        email: {
          required: "Sizinle iletişime geçebilmem için lütfen e-posta adresinizi giriniz.",
          email: "Yazdığınız e-posta adresi adınız@soyadınız.com şeklinde olmalı."
        },
        message: "Lütfen bana ileteceğiniz mesajınızı yazınız."
      }
  });
}
