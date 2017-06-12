$(function () {

    function smoothScroolOnClick () {
      $('a[href*="#"]').click(function(event) {
  
        // On-page links
        if (location.pathname.replace(/^\//, '') == 
          this.pathname.replace(/^\//, '') && location.hostname == 
          this.hostname) {

          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

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

    function modalLoader () {

      $('.custom-col-sm-2').on('click', function(){

        /*----------  for taking attr from img src & alt  ----------*/
        var imgSrc = $(this).find('img').attr('src');
        var modalsSrc = imgSrc.slice(0,18) + '/modals/m-' + imgSrc.slice(19);
        var altSrc = $(this).find('img').attr('alt');

        /*----------  for taking value & insert in modal body  ----------*/
        var headingAndBrand = imgSrc.slice(19);
        var textInHeading6 = '';
        var spanTextInsidePara = '';
        var paraTextModalImg = 'Proin gravida nibh vel velit auctor'+
        'aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi '+
        'elit consequat ipsum, nec sagittis sem nibh id elit.';

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
          '<span class="tag-text-modal-img">'+spanTextInsidePara+'</span>'+
        '</p>');
      });
    }


    function loadGeoLocation () {
    
      // Loading Gmaps for Philippines
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


    function spinImage () {

      //When click on submit button image loading appears
      $('.button-submit').click(function() {
          $('.fa-spinner').addClass('fa-spin').css('display', 'inline');
      });
    }

    function changeHeaderProp () {

      // On mouse click on arrow change displaying text
      $('.left-arrow-wrapper, .right-arrow-wrapper').click(function () {
        $('.first-text-to-swap').toggle('slow', 'swing');
        $('.second-text-to-swap').toggle('slow', 'swing');
      });

      // On mouse enter/leave over header show controls
      $('.introduction-part').mouseenter(function() {
        $('.control-text').show();
      });
      $('.introduction-part').mouseleave(function() {
        $('.control-text').hide();
      });
    }

	/*----------  put cols & paras on new lines ----------*/
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

    // When screen size iz <=1024px show control arrows in header
    if ($(window).width() <= 1007) {
      $('.control-text').show();
      $('.introduction-part').mouseleave(function() {
        $('.control-text').show();
      });
    } else {
      $('.control-text').hide();
      $('.introduction-part').mouseleave(function() {
        $('.control-text').hide();
      });
    }
	});

  /*----------  for smooth scrolling  ----------*/
  smoothScroolOnClick();

  /*----------  for loading modal pics  ----------*/
  modalLoader();

  /*----------  for loading Google geolocation  ----------*/
  loadGeoLocation();

  /*----- for adding image when click on submit btn -----*/
  spinImage();

  /*----- for changing text in header -----*/
  changeHeaderProp();
});