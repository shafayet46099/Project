jQuery(document).ready(function(){
	

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    navText:true,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    smartSpeed:400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        700:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true
	        }
	    }
	})
	$('.student-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    navText:true,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    smartSpeed:400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        700:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true
	        }
	    }
	})
// about page
	$('.ex-carousel').owlCarousel({
	    loop:true,
	    // margin:20,
	    navText:true,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    smartSpeed:400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        700:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true
	        }
	    }
	})
	// Courses-page
	var mixer = mixitup(".con");


});