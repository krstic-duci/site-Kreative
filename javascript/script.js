/**

	TODO:
	(napisao sam 819 na liniji 35 jer je 836px trazena rezolucija kada se menja
	pozicija elementa, i ona(836) je manja za 17px(tako sam dobio 819) i tek 
	tada dobijam da se viewport menja na 836px)
	- need to specify tags <h6>, <i>, <p> at function modalLoader 76 - 78 lines
	- add customize pin on gmaps.js
	- when scroll down or up with mouse through page ( must lose focus on nav li 
	(home)) i.e. lose it's class, function loseFocusOnActiveElem
	- when click on img in pic-wrapper, then close the modal focus is on the pic
	and there is a text-decoration on anchor tag
	- lines 66 - 68 at fnc modalLoader, need to change bck color & color of para
	when hover over img
	- when click on submit btn img loading is not loading
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
	});

	/*----------  for loading Google geolocation  ----------*/
	loadGeoLocation();
});
function modalLoader () {

	/*----------  add class of bck color to .text-below-modal-img  ----------*/
	$('div.col-md-3.col-sm-3.custom-col-sm-2').hover(function() {
		$('.text-below-modal-img').addClass('text-below-modal-img:hover')
		.removeClass('.text-below-modal-img');
	});

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

        /*----------  add value to modal  ----------*/
        for (var i = 0; i < textInHeading6.length; i++) {
        	$('.change-pic-in-modal').html(
			'<img src="' + modalsSrc + '" alt="' + altSrc + '">'+
			'<h6>'+ 'Text to be added' +  '</h6>'+
			'<p class="para-text-modal-img">'+ paraTextModalImg +'</p>'+
			'<p>'+ 
				'<i class="fa fa-tag" aria-hidden="true"></i>'+ 
				'<span class="tag-text-modal-img"> ' + 'Text to be added' + '</span>'+
			'</p>');
        }
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