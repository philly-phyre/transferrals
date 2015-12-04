/* BASIC TEXT FINDER/PRINTER */

var text = 'lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lolo Phil lol Phil PhilPhilPhil Philly, lol ololol';

var myName = 'Phil';

var hits = [];

for (var i =0; i<text.length; i++){
    if (text[i] === 'P'){
        for (var j=i; j<(myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

if (hits.length < 1) {
    console.log('Your name was not found!');
} else {
    console.log(hits);
}