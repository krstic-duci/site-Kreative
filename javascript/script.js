/**

	TODO:
	(napisao sam 819 na liniji 35 jer je 836px trazena rezolucija kada se menja
	pozicija elementa, i ona(836) je manja za 17px(tako sam dobio 819) i tek 
	tada dobijam da se viewport menja na 836px)
	- need to specify tags <h6>, <i>, <p> at function modalLoader 76 - 78 lines
	- add customize pin on gmaps.js
	- when scroll down or up with mouse through page ( must lose focus on nav li 
	(home)) i.e. lose it's class, function loseFocusOnActiveElem
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

			/*----------  put Services section on new lines ----------*/
			$('.custom-col-services').removeClass('col-sm-8').addClass('col-sm-12');
			$('.custom-col-sm').removeClass('col-sm-4').addClass('col-sm-6');

			/*----------  put Portfolio section on new lines ----------*/
			$('.custom-col-sm-2').removeClass('col-sm-3').addClass('col-sm-4');

			/*----------  img sneaker splash in Portfolio section add margin ----------*/
			$('.spec-img-margin-portfolio').addClass('img-modal-change-margins');

			/*----------  put About Us section second para on new lines ----------*/
			$('.custom-col-sm-3').removeClass('col-sm-9').addClass('col-sm-12');

			/*----------  put About Us column para on new lines ----------*/
			$('.custom-col-sm-4').removeClass('col-sm-3').addClass('col-sm-6');
		} else {

			/*----------  put col-sm, para & margin to default value----------*/
			$('.custom-col-services').removeClass('col-sm-12').addClass('col-sm-8');
			$('.custom-col-sm').removeClass('col-sm-6').addClass('col-sm-4');
			$('.custom-col-sm-2').removeClass('col-sm-4').addClass('col-sm-3');
			$('.spec-img-margin-portfolio').removeClass('img-modal-change-margins');
			$('.custom-col-sm-3').removeClass('col-sm-12').addClass('col-sm-9');
			$('.custom-col-sm-4').removeClass('col-sm-6').addClass('col-sm-3');
		}

		/*----------  add class of bck color to .text-below-modal-img  ----------*/
		$('a[data-target*="#myModal"]').mouseenter(function() {
			alert('da');
			$('p.text-below-modal-img').addClass('p.text-below-modal-img:hover');
		});

	});
});
function modalLoader () {

	$('.pic-wrapper').on('click', 'img', function(){

		/*----------  for taking attr from img src & alt  ----------*/
        var imgSrc = $(this).attr('src');
        var modalsSrc = imgSrc.slice(0,18) + '/modals/m-' + imgSrc.slice(19);
        var altSrc = $(this).attr('alt');

        var textInHeading6 = ['The Cosmics Sneakers', 'Milk Splash', 'Eve',
        					'Sneaker Splash', 'Judah', 'Vector Flower', 'Clock',
        					'Fields'];

        var spanTextInsidePara = ['Branding, Web Design', 'Branding, Web Design',
        'Photography, Branding', 'Photography, Branding', 'Photography, Web Design',
        'Branding, Web Design', 'Branding, Web Design', 'Photography'];

        var paraTextModalImg = 'Proin gravida nibh vel velit auctor aliquet.'+ 
        'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat '+
        'ipsum, nec sagittis sem nibh id elit.';

        for (var i = 0; i < textInHeading6.length; i++) {
        	$('.change-pic-in-modal').html(
			'<img src="' + modalsSrc + '" alt="' + altSrc + '">'+
			'<h6>'+ textInHeading6[i] +  '</h6>'+
			'<p class="para-text-modal-img">'+ paraTextModalImg +'</p>'+
			'<p>'+ 
				'<i class="fa fa-tag" aria-hidden="true"></i>'+ 
				'<span class="tag-text-modal-img"> ' + spanTextInsidePara[i] + '</span>'+
			'</p>');
        }
        /*----------  add value to modal  ----------*/
        
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