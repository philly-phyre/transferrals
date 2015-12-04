/* Kushtopia Game V0.0.0 */

/* Idea from guy at StackOverflow on slowing it down.

function logConsole(text, delay) {
  window.setTimeout(function() { 
     console.log(text);
  }, delay || 0);
};

*/

function timedChoice(p, d) {
	window.setTimeout(function(){
		console.log('Noted. You\'ve chosen: ' + p + '.');
	}, d || 650);
};

function timedLog(t, d) {
	window.setTimeout(function(){
		console.log(t);
	}, d || 650);
};

function timedAlert(t, d) {
	window.setTimeout(function(){
		alert(t);
	}, d || 650);
};




alert('~~ WELCOME TO KUSHTOPIA ~~');
console.log('Before we get started, let\'s find out a little about you.');
usr = {
		name : prompt('What\'s your name?').toUpperCase(),
		age : prompt('How old are you? Please use digits.'),
		clr : prompt('What\'s your favorite color?').toUpperCase(),
		pref : prompt('Which strain of marijuana is your favorite?').toUpperCase(),
		lighters: ['ZIPPO'],
	};


window.setTimeout(function(){
	console.log('You have entered the following: Name: ' + usr.name + ' -- Age: ' + usr.age + ' -- Color: ' + usr.clr + ' -- Strain: ' + usr.pref + '.');
	var again = prompt('Would you like to change anything before we roll up? Y/N').toUpperCase();
	window.setTimeout(function(){
		while (again === 'Y'){
			var change = prompt('Which option would you like to change: NAME, AGE, COLOR, OR STRAIN?').toUpperCase();
			switch(change){
				case 'NAME':
					usr.name = prompt('What\'s your name? (LAST CHANCE)').toUpperCase();
					again = 'N';
					break;
				case 'AGE':
					usr.age = prompt('How old are you? (LAST CHANCE)').toUpperCase();
					again = 'N';
					break;
				case 'COLOR':
					usr.clr = prompt('What\'s your favorite color? (LAST CHANCE)').toUpperCase();
					again = 'N';
					break;
				case 'STRAIN':
					usr.pref = prompt('Which strain of marijuana is your favorite?').toUpperCase();
					again = 'N';
					break;
				default:
					console.log('Please enter a valid option.');
					again = 'Y';
					break;
			}
		};
	}, 650);
}, 650);

window.setTimeout(function(){
	console.log('You have entered the following: Name: ' + usr.name + ' -- Age: ' + usr.age + ' -- Color: ' + usr.clr + \
			' -- Strain: ' + usr.pref + '.');
	}, 650);

// Start Game

timedLog('Hi, ' +usr.name + '.');
console.log('The air smells pungent today, and the weather is perfect.');
console.log(''); console.log('');
timedLog('Did you hear that? I think something may be following you down the path to the dispensary...', 400);
console.log(''); console.log('');


timedAlert('...');

timedLog('There was another rustle in the brush!');
console.log(''); console.log('');

timedLog('Maybe you should do something about it..?');
timedLog(''); timedLog('');

//firstScene()

function firstScene() {
	window.setTimeout(function(){
	var alpha = prompt('There are some ROCKS and an empty CAN on the GROUND, or your PIPE in your POCKET. \
					You may choose an action by typing the single-word input (not case-sensitive) to use an ITEM, \
					examine the PLACES, or FLEE (a useful command).', 'CAN').toUpperCase();
	switch(alpha) {
		case 'ROCKS':
			timedLog('You scooped up some pebbles and threw them into the bushes.');
			timedLog('"WHAT THE HELL?!" Tiff and Jamie walked out of the bushes a little upset, \
			but otherwise unharmed. They want to roll a BLUNT.');
			tjBlunt();
			break;
		case 'CAN':
			timedLog('You picked up the empty Busch can and tossed it into the bushes, without much force.');
			timedLog('"Ew! Busch," you hear a familiar voice call from the woods. Tiff and Jamie walk out of the \
			trees. They want to roll a BLUNT.');
			tjBlunt();
			break;
		case 'PIPE':
			timedLog('You whip out your pipe and start packing it full of the ' + usr.pref + ' that you just picked up.');
			timedLog('By the time you get a few hits off it, Tiff and Jamie walk out of the bushes laughing. \
			Apparently they had been watching you for a coupleminutes trying to scare you. They want to roll a BLUNT.');
			tjBlunt();
			break;
		case 'GROUND':
			timedLog('You look at the ground and see the ROCKS and CAN. You also notice there is a BIC on the ground.');
			window.setTimeout(function(){
				var i = prompt('Do you pick up the BIC? Y/N').toUpperCase());
					if (i === 'BIC' || i === 'Y'){
						timedLog('You grab the BIC off the ground and put it in your POCKET.');
						usr.lighters.push('GRAY');
					} else {
						timedLog('Was that a wise decision?');
						timedAlert('You can grab it at any time by typing BIC before you leave the area.');
					};
				}, 600);
			firstScene();
			break;
		case 'POCKET':
			if (usr.lighters.length > 1){
				timedLog('You have your ' + usr.lighters + ' and your PIPE.');
				timedLog('Choose any of them by typing the single capitalized word.');
				firstScene();
			} else {
				timedLog('You have your ZIPPO and your PIPE. You don\'t want to throw your ZIPPO, do you?');
				timedLog('...');
				var i = prompt('Are you serious?? Y/N').toUpperCase();
					if(i === 'Y'){
						timedAlert('You\'re mad; I can\'t let you do that...');
					} else {
						timedLog('Wise decision. You can\'t get rid of that.');
					};
			};
			firstScene();
			break;
		case 'ITEM':
			timedLog('These are the items in view: ROCKS, CAN, PIPE');
			timedLog('Choose any of them by typing in the single capitalized word.');
			firstScene();
			break;
		case 'PLACES':
			timedLog('These are the places you see: GROUND, POCKET');
			timedLog('Choose any of them by typing in the single capitalized word.');
			firstScene();
			break;
		case 'BIC':
			if(usr.lighters > 1) {
				bicExamine();
			} else {
				timedLog('You see a GRAY BIC lighter on the ground, so you pick it up and put it in your pocket. \
				|BIC count += 1, GRAY|');
				usr.lighters.push('GRAY');
			};
			firstScene();
		case 'FLEE':
			timedLog('Wow. Don\'t be a pussy, now. Stand Your ground...');
			timedLog('It was just Tiff and Jamie; they walk out of the bushes dying in laughter, and they want to roll a BLUNT.');
			tjBlunt();
			break;	
		case 'ZIPPO':
			zippoExamine();
			firstScene();
			break;
		default:
			timedLog('I\'m not sure what you even said, but there\'s no time anymore!');
			timedAlert('...');
			timedLog('It\'s just Tiff and Jamie. They walk over to you, y\'all dap it up, and they tell you they\'re about to roll a BLUNT.');
			tjBlunt();
			break;
		}
	}, 650);
};


firstScene();




/* EXAMINATIONS */

function zippoExamine() {
	timedLog('You pull out your trusty brass ZIPPO and reminisce over the memory of how you acquired it...');
	timedLog('...'); console.log('');
	TimedLog('Well; back to it, then.');
};

function bicExamine() {
	timedLog('You take a look at your BIC lighter(s)');
	timedAlert('Here are your BIC lighter colors: ' + usr.lighters + '.');
};


/* tjBlunt() */

function tjBlunt() {
	
};

// bong()

function bong() {
	
	/* PACK THE BONG V0.0.0 */

var user = prompt('Hit the bong? YES, NO, or ALREADY TOO HIGH?').toUpperCase();

switch(user){
    case 'YES':
        var strain = prompt('Gandalao? Y/N').toUpperCase();
        var full = prompt('Pack that bitch full? Y/N').toUpperCase();
       if(strain === 'Y' && full === 'Y'){
           console.log('You rip it harder than anyone else and win life.');
       } else {
           console.log('You still tried, and got a nice, puffy cloud.');
       };
        break;
    case 'NO':
        var why = prompt('Why not?').toUpperCase();
        var pressure = prompt('Everyone\'s eyes are baring down on you. I think you should hit it... Y/N').toUpperCase();
		if(pressure === 'Y') {
        	var strain = prompt('Forgivable. Gandalao? Y/N').toUpperCase();
        	var full = prompt('Pack that bitch full? Y/N').toUpperCase();
        	if(strain === 'Y' && full === 'Y'){
				console.log('You rip it harder than anyone else and win life.');
			} else {
				console.log('You still tried, and got a nice, puffy cloud.');
			};
		} else if(why === 'NO MEANS NO') {
			console.log('Sorry, man. Won\'t happen again.');
		} else {
			console.log('"' + why + '".' + ' What a bad excuse. Pussy... You hit it anyway.');
		};
        break;
    case 'already too high'.toUpperCase():
        console.log('Nice, bruhbruh. Tubular.');
        break;
    default:
        console.log('Let\'s try that again,' + usr.name + '.');
		bong();
        break;
};

/* END PACK THE BONG */
















