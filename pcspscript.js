$(document).ready(function() {
	//slide1 slide left
	$('#billboard-browse').click(function(){
		$('#slide1').animate({right: '+=500px', opacity: '0'}, 777);
		
	},
	//billboard-browse list slide onscreen
	//$().
	$('#slide2').css('display', 'inline');
	$('#slide2').animate({right: '+=500px', opacity: '1'}, 777);
});