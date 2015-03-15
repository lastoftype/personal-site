jQuery(document).ready(function($) {
	
	$("h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '100px' });

	$('.list-social li:nth-of-type(1)').addClass('first-up');
	$('.list-social li:nth-of-type(2)').addClass('second-up');
	$('.list-social li:nth-of-type(3)').addClass('third-up');

});