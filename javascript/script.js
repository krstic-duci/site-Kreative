$(function () {
	/*----------  put footer navbar on new line on < 701px  ----------*/
	$( window ).resize(function() {
  		if($(window).width() <= 836) {
  			$('.custom-col-sm').addClass('col-sm-6');
 		}else {
  			$('.custom-col-sm').removeClass('col-sm-6');
  		}	
	});
});


