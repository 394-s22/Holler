
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

/*
Component to display a widget of the user's Google calendar if they have entered email.
Otherwise, prompts them to enter email.
*/
export const CalendarInterface = (props) => {
    if(props.visibility) {
        return(
            <>
            <h3>Your calendar: <input type="email" placeholder="user@gmail.com" id="email"/>
            <Button variant="cta" onClick={showCal}>Load</Button></h3>
            <div id="calendarEmbedWrapper">
                <iframe id="calendarEmbed"></iframe>
                <div id="calendarEmbedBlocker">
                    <p class="email-prompt">enter email to load calendar</p>
                </div>
            </div>
            </>
        );
    }
}

/*
<<<<<<< HEAD
Once a user enters an email, display their personal Google calendar 
in place of "enter email to load calendar"
=======
Displays a user's Google Calendar upon entering their email
>>>>>>> 5cf1c551c0097f189205dce4e412b54bf13643c5
*/
function showCal(){
    var iframe = document.getElementById('calendarEmbed');
    var email = document.getElementById('email').value;
    var blocker = document.getElementById('calendarEmbedBlocker');
    if (email && /.+\@.+/.test(email)){
        iframe.src = 'https://calendar.google.com/calendar/embed?src=' + encodeURI(email);
        blocker.style.display = 'none';
    }
    else {
        alert("That doesn't look like a valid email...");
        blocker.style.display = 'block';
    }
}