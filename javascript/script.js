/**

	TODO:
	(napisao sam 819 na liniji 45 jer je 836px trazena rezolucija kada se menja
	pozicija elementa, i ona (836) je manja za 17px(tako sam dobio 819) i tek 
	tada dobijam da se viewport menja na 836px)

	- add customize pin on gmaps.js

	- when scroll down or up with mouse through page ( must lose focus on nav li 
	(home)) i.e. lose it's class, function loseFocusOnActiveElem

	- when click on img in pic-wrapper, then close the modal, focus is on the pic
	and there is a text-decoration on anchor tag (section pics-wrapper)

	- when click on text-below-modal-img there is no img in modal body (section
	pics-wrapper)

	- lines 76 - 79 at fnc modalLoader, need to change bck color & color of para
	when hover over img (section pics-wrapper)

	- proper modal working when resolution is <= 767px (section pics-wrapper)
	
	- when click on submit btn img loading is not loading (section contact)
 */


$(function () {

	/*----------  loading img when user click submit btn  ----------*/
	addInteractiveContactSection();

	/*----------  for smooth scrolling  ----------*/
	smoothScroolOnClick();

	/*----------  for focusout on nav li elems  ----------*/
	loseFocusOnActiveElem ();

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

			/*----------  put About Us section second para on new lines ----------*/
			$('.custom-col-sm-3').removeClass('col-sm-9').addClass('col-sm-12');

			/*----------  put About Us column para on new lines ----------*/
			$('.custom-col-sm-4').removeClass('col-sm-3').addClass('col-sm-6');
		} else {

			/*----------  put col-sm, para & margin to default value----------*/
			$('.custom-col-services').removeClass('col-sm-12').addClass('col-sm-8');
			$('.custom-col-sm').removeClass('col-sm-6').addClass('col-sm-4');
			$('.custom-col-sm-2').removeClass('col-sm-4').addClass('col-sm-3');
			$('.custom-col-sm-3').removeClass('col-sm-12').addClass('col-sm-9');
			$('.custom-col-sm-4').removeClass('col-sm-6').addClass('col-sm-3');
		}
	});

	/*----------  for loading Google geolocation  ----------*/
	loadGeoLocation();
});
function modalLoader () {

	/*----------  add class of bck color to .text-below-modal-img  ----------*/
	// $('img.img-responsive').hover(function() {
	// 	$('.text-below-modal-img').removeClass('.text-below-modal-img')
	// 	.addClass('.text-below-modal-img:hover');
	// });

	$('.pic-wrapper').on('click', 'img', function(){

		/*----------  for taking attr from img src & alt  ----------*/
        var imgSrc = $(this).attr('src');
        var modalsSrc = imgSrc.slice(0,18) + '/modals/m-' + imgSrc.slice(19);
        var altSrc = $(this).attr('alt');

        /*----------  for taking value & insert in modal body  ----------*/
        var headingAndBrand = imgSrc.slice(19);
        var textInHeading6 = '';
        var spanTextInsidePara = '';
        var paraTextModalImg = 'Proin gravida nibh vel velit auctor aliquet.'+ 
        'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat '+
        'ipsum, nec sagittis sem nibh id elit.';

        switch (headingAndBrand) {
        	case 'cosmic-sneakers.jpg':
        		textInHeading6 = 'The Cosmics Sneakers';
        		spanTextInsidePara = 'Branding, Web Design';
        		break;
        	case 'milk-splash.jpg':
        		textInHeading6 = 'Milk Splash';
        		spanTextInsidePara = 'Branding, Web Design';
        		break;
        	case 'eve.jpg':
        		textInHeading6 = 'Eve';
        		spanTextInsidePara = 'Photography, Branding';
        		break;
        	case 'sneaker-splash.jpg':
        		textInHeading6 = 'Sneaker Splash';
        		spanTextInsidePara = 'Photography, Branding';
        		break;
        	case 'judah.jpg':
        		textInHeading6 = 'Judah';
        		spanTextInsidePara = 'Photography, Web Design';
        		break;
        	case 'vector-flower.jpg':
        		textInHeading6 = 'Vector Flower';
        		spanTextInsidePara = 'Branding, Web Design';
        		break;
        	case 'clock.jpg':
        		textInHeading6 = 'Clock';
        		spanTextInsidePara = 'Branding, Web Design';
        		break;
        	case 'fields.jpg':
        		textInHeading6 = 'Fields';
        		spanTextInsidePara = 'Photography';
        		break;
        }

        /*----------  add value to modal  ----------*/
        $('.change-pic-in-modal').html(
		'<img src="' + modalsSrc + '" alt="' + altSrc + '">'+
		'<h6>'+ textInHeading6 +  '</h6>'+
		'<p class="para-text-modal-img">'+ paraTextModalImg +'</p>'+
		'<p>'+ 
			'<i class="fa fa-tag" aria-hidden="true"></i>'+ 
			'<span class="tag-text-modal-img"> ' + spanTextInsidePara + '</span>'+
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
function loseFocusOnActiveElem () {

	/*----------  remove class from nav li (home) active elem when scroll ----------*/
	$('.nav.navbar-nav li a').focusout(function() {
		$('li.active-elem.').removeClass();
	});

	/*----------  remove class from nav li (home) active elem when click ----------*/
	$('.nav.navbar-nav li a').click(function() {
		$('li.active-elem').removeClass();
	});
}
function addInteractiveContactSection () {

	/*----------  add img loading on click of a btn ----------*/
	$('.button-submit').click(function() {
		$('.fa.fa-spinner.fa-3x').css('display', 'inline');
	});

	/*----------  add color when user click inside form input & textarea ----------*/
	$('.form-control').click(function() {
		$(this).addClass('change-color-input-textarea');
	});
}