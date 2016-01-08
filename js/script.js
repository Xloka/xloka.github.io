$(document).ready(function() {

  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    //scrollContainer: "" // optional scroll container selector, otherwise use window
  });
  wow.init();


  $('.loading').slideUp('slow');
  $('.mdl-layout__content').scroll(function() {
		        if( $('.mdl-layout__content').scrollTop() > 10 ){
		        	$('.mdl-layout__header-row').css({
		        		'background-color': '#000'
		        	});
		       }else{
		       	    $('.mdl-layout__header-row').css({
		       	    	'background-color': 'transparent'
		       	    });
		       }
		     });

});
