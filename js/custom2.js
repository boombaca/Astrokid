/*
Theme Name: Vibrant 
Author URI: http://webthemez.com/
Description: This theme is a best responsive web template. It would be great for a corporate websites, business websites, personal blog.
License: Free to use for personal and commercial, but you need to place back link in the bottom of the template.
*/
var customScripts = {
    profile: function () {
     	 var portfolio = $('#portfolio');
		var items = $('.items', portfolio); 
		var filters = $('.filters li a', portfolio); 
	
		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '0.7s'
			});
		});
		
		filters.click(function(){
			var el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			var selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});            
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#features').offset().top - 75 }, "slow"); 
                return false;
            });
    }, 
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  
			$('#aboutUs').waypoint(function() {				
			$('.design').addClass( 'animated fadeInUp show' );   
			}, { offset: 350 }); 
			
			$('.features').waypoint(function() { 
			$('.phone-image').addClass( 'animated bounceIn' ); 
			$('.features-left').addClass( 'animated fadeInLeft show' );   
			$('.features-right').addClass( 'animated fadeInRight show' );  
			}, { offset: 350 });
			$('#services').waypoint(function() {    
			$('.serviceBox').addClass( 'animated fadeInRight show' );  
			$('.owl-wrapper-outer').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			$('#work').waypoint(function() {    
			 $('#portfolio').addClass( 'animated fadeInRight show' ); 
			}, { offset: 350 });
			
			
		},
		fitText: function(){			  
				setTimeout(function() {			
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '40px' });			
				}, 100);
		},
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox(); 
        customScripts.owlSlider();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
}
var reasons = [
	"Payload: Cargo on the rocket carrying satellites, experiments, or crew; achieves the mission's objectives in space.",
	"Guidance System: Onboard tech steering rocket's path with sensors, computers, and control mechanisms for intended trajectory during flight.",
	"Fuel: Propellant providing energy, burns with oxidizer to produce high-speed exhaust gases for rocket propulsion.",
	"Frame: Structural support holding rocket components together, maintaining shape, and stability during launch and flight.	",
	"Oxidizer: Substance that provides oxygen to fuel, enabling combustion in rocket engines, producing thrust for propulsion.	",
	"Pumps: Devices used in rocket engines to transport and pressurize propellant, enabling efficient fuel delivery and engine operation.",
	"Nozzle: The exhaust outlet of a rocket engine that shapes and accelerates high-speed exhaust gases to produce thrust efficiently.",
	"Fin: Aerodynamic surface at rocket's base for stability, control, and balance during flight by resisting air pressure and ensuring orientation.",
	"The end"
	  ];
	  var images = [
		"https://i.ibb.co/vDfJMrm/payload.png",
		"https://i.ibb.co/pWwLYhv/guidance.png",
		"https://i.ibb.co/V9hmm95/fuel.png",
		"https://i.ibb.co/JvhFck5/frame.png",
		"https://i.ibb.co/y0k4DMm/oxidizer.png",
		"https://i.ibb.co/Xjb11qk/pumps.png",
		"https://i.ibb.co/CB5Myxk/nozzle.png",
		"https://i.ibb.co/YtBTWp5/fin.png",
		"https://www.evohair.com/media/wysiwyg/evo_blog/evo_hair_the_end_moon.1433134259.gif"
		  ];
	  
		  var i = 0;
		  function nextslide() { 
			document.getElementById("reasontext").innerHTML = reasons[i];
			document.getElementById("album").src = 
			  images[i];
			i++;
		  }
		  
$('document').ready(function () {
    customScripts.init();
	$('.features-left, .features-right, .design, .serviceBox, .owl-wrapper-outer, #portfolio').css('opacity','0');
});
