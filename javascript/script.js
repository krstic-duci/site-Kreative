/**

	TODO:
	- proper screen resize on .custom-col-sm when screen <= 836px 
	(napisao sam 819 jer je 836 trazena rezolucija, i ona je manja za 17px i tek
	tada dobijam da se viewport menja tek na 836px)
	- need to specify tags <h6>, <i>, <p> from line 51 up to 55

 */

$(function () {

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

			/*----------  put About Us coulmn para on new lines ----------*/
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