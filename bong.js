/* PACK THE BONG V0.0.0 */

var user = prompt('Hit the bong? Yes, no, or already too high?').toUpperCase();

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
        if(why === 'NO MEANS NO' || pressure === 'N') {
            console.log('Pussy... You hit it anyway.');
        } else if(pressure === 'Y') {
        var strain = prompt('Gandalao? Y/N/').toUpperCase();
        var full = prompt('Pack that bitch full? Y/N').toUpperCase();
        if(strain === 'Y' && full === 'Y'){
           console.log('You rip it harder than anyone else and win life.');
       } else {
           console.log('You still tried, and got a nice, puffy cloud.');
       }
};
        break;
    case 'already too high'.toUpperCase():
        console.log('Nice, bruhbruh. Tubular.');
        break;
    default:
        console.log('aight doe, try again. Hit run, preasu.');
        break;
}