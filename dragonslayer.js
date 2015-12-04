/* DRAGON SLAYER V0.0.1 */

var slaying = true;

var youHit = Math.floor(Math.random()*3.1);

var damageThisRound = Math.floor(Math.random()*4+1);

var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log('You hit the dragon for ' + damageThisRound + '!!');
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log('You slew the dragon!');
            slaying = false;
        } else {
            youHit = Math.floor(Math.random()*3.1);
        };
    } else {
        console.log('The dragon burnt you to smithereens! Try again in your next life...');
        slaying = false;
    }

};