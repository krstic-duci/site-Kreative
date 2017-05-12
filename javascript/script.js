/**

	TODO:
	(napisao sam 819 na liniji 26 jer je 836 trazena rezolucija, 
	i ona je manja za 17px i tek tada dobijam da se viewport menja tek na 836px)
	- need to specify tags <h6>, <i>, <p> at function modalLoader (line 65)
	- add customize pins on gmaps.js
	- when scroll down or up with mouse through page ( must lose focus on nav li 
	(home)) i.e. lose it's class
	- when click on .text-below-modal-img fnc modalLoader cannot load any img 
	(src attr is undefined)

 */


$(function () {


	/*----------  for focusout on nav li elems  ----------*/
	loseFocusOnActiveElem ();

	/*----------  for smooth scrolling  ----------*/
	smoothScroolOnClick();

	/*----------  for loading Google geolocation  ----------*/
	loadGeoLocation();

	/*----------  for loading modal pics  ----------*/
	modalLoader();

	/*----------  put col & para on new lines ----------*/
	$(window).resize(function() {

		if ($(window).width() <= 819) {

			$('.divs-wrapper').addClass('container-fluid');
			/*----------  put Services section on new lines ----------*/
			$('.custom-col-services').removeClass('col-sm-8').addClass('col-sm-12');
			$('.custom-col-sm').removeClass('col-sm-4').addClass('col-sm-6');

			/*----------  put Portfolio section on new lines ----------*/
			$('.custom-col-sm-2').removeClass('col-sm-3').addClass('col-sm-4');

			/*----------  put About Us section second para on new lines ----------*/
			$('.custom-col-sm-3').removeClass('col-sm-9').addClass('col-sm-12');

			/*----------  put About Us column para on new lines ----------*/
			$('.custom-col-sm-4').removeClass('col-sm-3').addClass('col-sm-6');
		} else {

			/*----------  put col & para to default ----------*/
			$('.custom-col-services').removeClass('col-sm-12').addClass('col-sm-8');
			$('.custom-col-sm').removeClass('col-sm-6').addClass('col-sm-4');
			$('.custom-col-sm-2').removeClass('col-sm-4').addClass('col-sm-3');
			$('.custom-col-sm-3').removeClass('col-sm-12').addClass('col-sm-9');
			$('.custom-col-sm-4').removeClass('col-sm-6').addClass('col-sm-3');
		}

		/*----------  add class of bck color to para below modal img ----------*/
		$('.custom-col-sm-2 a img.img-responsive').hover(function() {
			console.log('da');
			$('p.text-below-modal-img').addClass('p.text-below-modal-img:hover');
		});

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
		'</p>').addClass('img-portfolio-modal');
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
function loseFocusOnActiveElem () {

	/*----------  remove class from nav li (home) active elem when scroll ----------*/
	$('li.active-elem.active a').focusout(function() {
		$('li.active-elem').removeClass();
	});

	/*----------  remove class from nav li (home) active elem when click ----------*/
	$('.nav.navbar-nav li a').click(function() {
		$('li.active-elem').removeClass();
	});
}