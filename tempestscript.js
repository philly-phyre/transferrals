
	$(document).ready(function(){
	// billboard functions
		var $billboard = $('.billboard');
		$billboard.mouseenter(function(){
			$(this).fadeTo('slow', 0.98);
			});
		$billboard.mouseleave(function(){
			$(this).fadeTo('slow', 0.72);
			});
		var $learn = $('#learn-more');
		$learn.hover(function(){
			$(this).fadeTo('slow', 1);
			}, 
		function() {
			$(this).fadeTo('slow', 0.6);
			});
	// news and updates/appendedTo
		var $submitpass = $('#submitpass');
		var $newssubmit = $('#newssubmit');
		$submitpass.click(passwordcheck);
		$newssubmit.click(function(){
			$('#appendedTo').append('<div class="update">'+$('#newsinput').val()+'</div>');
			});
		});

// passwordcheck();
function passwordcheck() {
		var $newspass = $('#newspass');
		var $submitpass = $('#submitpass');
		var $newssubmit = $('#newssubmit');
		if ($newspass.val() === atob('Y29tZWNvcnJlY1Q=')) {
				$submitpass.hide();
				$newspass.hide();
				$('#newsinput').show();
				$('#newsinput').show();
				$newssubmit.show();
		} else {
			window.alert("Try again, please.");
			
		}
	};

// ENCODED passwordcheck();
// eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('9 a(){3 $0=$(\'#0\');3 $2=$(\'#2\');3 $1=$(\'#1\');b($0.8()===\'7\'){$2.6();$0.6();$(\'#4\').5();$(\'#4\').c(\'i\',\'j\');$1.5()}h{g.d("e f, k.")}};',21,21,'newspass|newssubmit|submitpass|var|newsinput|show|hide|comecorrecT|val|function|passwordcheck|if|css|alert|Try|again|window|else|display|block|please'.split('|')))


/*events.and.handlers(function(){ 

~~~ multiple functions on click dictations:

$(document).on("click", ".someclass", CallbackFunction1)   <---- no semicolon.
		   .on("click", ".someclass", CallbackFunction2);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ focus dictations:

$(document).ready(function(){
	$('input').focus(function(){
		$('input').css('outline-color', '#f00');
	});
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ keydown dictations:

$(document).ready(function(){
	$(document).keydown(function(){
		$('div').animate({left: '+=10px'}, 500);
	});
});

			  **********

$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: '-=10px'}, 'fast');
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: '+=10px'}, 'fast');
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: '+=10px'}, 'fast');
				// Put our code here
				break;
		}
	});
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~ set timeout dictation:
					   vvvv	 milliseconds
setTimeout(myFunction, 2000)

function myFunction() {
	alert('Was called after 2 seconds');
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .effect(handler) dictations:

explode-

$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');
    });
});

HANDLERS: .effect('explode'; 'bounce', {times:x}, xxx; 'slide'; 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .accordion() dictations:

html structure for correct implementation:

	 vv  can be any size heading
<div id="menu">
	<h3>Heading</h3>
		<div>
			<p>collapsed/collapsible text</p>
		</div>
</div>

                             makes sections closable
$(document).ready(function() {     vvvv			  vvvv  start with none open or 'active'
    $("#menu").accordion({collapsible: true, active: false});
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .draggable() dictation:

$(document).ready(function(){
    $('#car').draggable();
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .resizable() dictation:

$(document).ready(function(){
    $('div').resizable();
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .selectable() dictations:

inherent css class when selectable element is clicked -- '.ui-selected'

$(document).ready(function(){
    $('ol').selectable();
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ jQuery UI .sortable() dictation:

$(document).ready(function(){
    $('ol').sortable();
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~ 










});*/