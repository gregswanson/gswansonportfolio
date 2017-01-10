
///Preloader///////
$(window).load(function() { // makes sure the whole site is loaded
     var preloader=$('#mask div');
     preloader.fadeOut(); // will first fade out the loading animation
     $('#mask').delay(350).fadeOut('slow'); 
    // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  }) 

// background image 
// var winHeight = $(window).height();
//   console.log ("window height: " + winHeight);
//   $('#tf-home').height(winHeight);



//email
$('#emailcontact').on( 'click', '#emailButton', function() {

    
   
//console.log("BRAND NEW EMAIL: ");

    var contact = 
      {
        subject: $("#emailName").val(),
        mess: $("#emailMessage").val(),
        email: $("#emailEmail").val()   
      };

      var currentURL = window.location.origin;

      $.post( currentURL + "/", contact)
        .done(function(data){
          //console.log(data);
          alert("Preparing to send")
        })

      $('#emailName').val("");
      $('#emailMessage').val("");
      $('#emailEmail').val("");
    
    return false;

    });






///title fade/////
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });
////


function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	


}());


}
main();