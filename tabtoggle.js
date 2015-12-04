$('.work-detail2, .work-detail3').hide();
	$('.work-2, .work-3').addClass('square-inactive');
    $('.work-1').addClass('square-active');

    $('.work-1').click(function(){
        $('.work-1').addClass('square-active');
        $('.work-2,.work-3').removeClass('square-active');
		$('.work-2, .work3').addClass('square-inactive');
        $('.work-detail1').show(500);
        $('.work-detail2, .work-detail3').hide(500);
    });

    $('.work-2').click(function(){
        $('.work-1,.work-3').removeClass('square-active');
		$('.work-1, .work-3').addClass('square-inactive');
        $('.work-2').addClass('square-active');
        $('.work-detail2').show(500);
        $('.work-detail1, .work-detail3').hide(500);
    });

    $('.work-3').click(function(){
        $('.work-1,.work-2').removeClass('square-active');
		$('.work-1, work-2').addClass('square-inactive');
        $('.work-3').addClass('square-active');
        $('.work-detail3').show(500);
        $('.work-detail1, .work-detail2').hide(500);
	});

$document.getElementByClassName('square-active').innerHTML('-');
&document.getElementByClassName('square-inactive').innerHTML('+');