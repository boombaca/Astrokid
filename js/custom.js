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
	"Gemini Observatory Telescopes   Diameter: 8.1 Meters Location: Mauna Kea, Hawaii and Cerro Pachon, Chile",
	"Very Large Telescope   Diameter: 8.2 Meters Location: Atacama Desert, Chile ",
	"Subaru Telescope   Diameter: 8.4 Meters Location: Mauna Kea, Hawaii, The United States  ",
	"Large Binocular Telescope   Diameter: 8.4 Meters Location: Pinaleno Mountains, Arizona, The United States",
	"Southern African Large Telescope   Diameter: 9.2 Meters Location: Sutherland, South Africa ",
	"Keck 1 and 2   Diameter: 10 Meters Location: Mauna Kea, Hawaii, The United States ",
	"Hobby-Eberly Telescope   Diameter: 10 meters Location: Davis Mountain, Texas, The United States",
	"Gran Telescopio Canarias   Diameter: 10.4 meters Location: La Palma, Canary Islands, Spain ",
	"The Giant Magellan Telescope   Diameter: 24.5 m Location: Vallenar, Chile Estimated Completion: 2025 ",
	"Thirty Meter Telescope   Diameter: 30 Meters Location: Mauna Kea, Hawaii Estimated Completion: 2027",
	"1. European Extremely Large Telescope   Diameter: 39.3 Meters Location: Cerro Armazones, Chile Estimated Completion: 2024",
	"The end"
	  ];
	  var images = [
		"https://i0.wp.com/www.rankred.com/wp-content/uploads/2018/12/Gemini-North.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/VLT.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Subaru-telescope.jpg?w=750&ssl=1",
		"https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/Large-Binoculers-Telescope.jpg?w=750&ssl=1",
		"https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/SALT.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Keck-Observatory.jpg?w=720&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/HET.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Gran-Telescopio-Canarias.jpg?w=750&ssl=1",
		"https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/Giant-Magellan-Telescope.jpg?w=750&ssl=1",
		"https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/TMT-primary-mirror.jpg?w=750&ssl=1",
		"https://i0.wp.com/www.rankred.com/wp-content/uploads/2018/12/Extremely-Large-Telescope.jpg?w=750&ssl=1",
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
