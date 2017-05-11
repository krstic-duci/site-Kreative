/**

	TODO:
	(napisao sam 819 na liniji 26 jer je 836 trazena rezolucija, 
	i ona je manja za 17px i tek
	tada dobijam da se viewport menja tek na 836px)
	- need to specify tags <h6>, <i>, <p> from line 51 up to 55
	- add customize pins on gmaps.js
	- when scroll down or up with mouse through page ( must lose focus on nav li 
	(home)) i.e. lose it's class

 */


$(function () {

	/*----------  remove class from nav li (home) active elem  ----------*/
	$('.nav.navbar-nav li a').click(function() {
		$('li.active-elem').removeClass();
	});

	/*----------  for smooth scrolling  ----------*/
	smoothScroolOnClick();

	/*----------  for loading Google geolocation  ----------*/
	loadGeoLocation();

	/*----------  for loading modal pics  ----------*/
	modalLoader();

	/*----------  put col & para on new lines ----------*/
	$(window).resize(function() {

		if ($(window).width() <= 819) {

			/*----------  put Services on new lines ----------*/
			$('.custom-col-sm').removeClass('col-sm-4').addClass('col-sm-6');

			/*----------  put Portfolio on new lines ----------*/
			$('.custom-col-sm-2').removeClass('col-sm-3').addClass('col-sm-4');

			/*----------  put About Us second para on new lines ----------*/
			$('.custom-col-sm-3').removeClass('col-sm-9').addClass('col-sm-12');

			/*----------  put About Us column para on new lines ----------*/
			$('.custom-col-sm-4').removeClass('col-sm-3').addClass('col-sm-6');
		} else {

			/*----------  put col & para to default ----------*/
			$('.custom-col-sm').removeClass('col-sm-6').addClass('col-sm-4');
			$('.custom-col-sm-2').removeClass('col-sm-4').addClass('col-sm-3');
			$('.custom-col-sm-3').removeClass('col-sm-12').addClass('col-sm-9');
			$('.custom-col-sm-4').removeClass('col-sm-6').addClass('col-sm-3');
		}
	});
});
function modalLoader () {

	$('.pic-wrapper').on('click', 'img', function(){

				/*----------  for taking attr from img src & alt  ----------*/
                var imgSrc = $(this).attr('src'); 
                var altSrc = $(this).attr('alt');

                /*----------  add value to modal  ----------*/
                $('.change-pic-in-modal').html(
				'<img src="' + imgSrc + '" alt="' + altSrc + '">'+
				'<h6>'+ 'Duca' +  '</h6>'+
				'<p>'+ 'random text' +'</p>'+
				'<p>'+ 
					'<i class="fa fa-tag" aria-hidden="true">'+ 
					' Branding, Web Design</i>'+
				'</p>');
    });
}
function loadGeoLocation () {

	var Gmap = new GMaps({
  		div: '#map',
  		lat: 14.553304,
  		lng: 121.051657,
  		zoom: 15
	});
    if(Gmap.map) {
  		// Disabling mouse wheel scroll zooming
  		Gmap.map.setOptions({ scrollwheel: false });
	}
}

function smoothScroolOnClick () {
	$('a[href*="#"]').click(function(event) {

    	// On-page links
    	if (location.pathname.replace(/^\//, '') == 
    		this.pathname.replace(/^\//, '') && location.hostname == 
    		this.hostname) {

      		// Figure out element to scroll to
      		var target = $(this.hash);
      		target = target.length ? target : 
      		$('[name=' + this.hash.slice(1) + ']');

      		// Does a scroll target exist?
      		if (target.length) {
        		// Only prevent default if animation is actually gonna happen
        		event.preventDefault();
        		$('html, body').animate({
        		 	scrollTop: target.offset().top
        		}, 300);
      		}
    	}
  	});
}
/*----------  make carousel to work on kbd btn  ----------*/
$(document).keydown(function(event) {
	if (event.keyCode == '37') {
   	   		$('.carousel-control .left').click();
   		}
   		else if (event.keyCode == '39') {
   	   		$('.carousel-control .right').click();
   		}
});