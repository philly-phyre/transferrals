var current, text, location, option1, option2;
location = ''; // house, car, moon
current = 0;
gameOver = false;
pick = false;

jQuery("textarea").keypress(function (e) {
    if (e.which == 13) {
        var content = this.value;
        var lastLine = content.substr(content.lastIndexOf("\n") + 1);

        // Story
        if (current == 0 && pick == false) {
            option1 = 'Look around';
            option2 = 'Check you have arms (Check arms)';
            text = 'You open your eyes \n\nOptions: \n' + option1 + '\n' + option2;
            pick = true;

        } else if (current == 0 && lastLine == 'Check arms' && pick == true) {
            text = 'You check your arms, they seem fine';
            pick = false;
        } else if (current == 0 && lastLine == 'Look around' && pick == true || current == 2 && lastLine == 'Get Out') {
            option1 = 'Walk to a nearby house';
            option2 = 'Get in a rocket that is next to you (Get in rocket)';
            text = 'You do a 360 spin, you see you have limited options \n\nOptions: \n' + option1 + '\n' + option2;
            pick = false;
            if (current == 2 && lastLine == 'Get Out') {
                current = 1;
            } else {
                current++;
            }
        }

        //House Story
        else if (current == 1 && lastLine == 'Walk to house' && pick == false) {
            option1 = 'Knock on the front door';
            option2 = 'Jump through the front window';
            text = 'You walk to the house and see there are no lights on, the building is old and appears to be burnt out\n\nOptions: \n ' + option1 + '\n ' + option2;
            pick = false;
            current++;
        }

        // Rocket story
        else if (current == 1 && lastLine == 'Get in rocket' && pick == false) {
            option1 = 'Get out of the rocket(Get out)';
            option2 = 'Hit the biggest button you can find(Hit Button)';
            text = 'You hop into the rocket, there are a lot of buttons infront of you\n\nOptions: \n ' + option1 + '\n ' + option2;
            pick = false;
            current++;
        }

        $('textarea ').val($('textarea ').val() + '\n\n ' + text + '\n ');
    }
});