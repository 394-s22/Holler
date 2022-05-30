
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

/*
Component to display a widget of the user's Google calendar if they have entered email.
Otherwise, prompts them to enter email.
*/
export const CalendarInterface = (props) => {
    if(props.visibility) {
        return(
            <>
            
       
            <h3>Your calendar: <input type="email" placeholder="user@gmail.com" id="email"/></h3>
            {/* <Button variant="cta" onClick={showCal}>Load</Button> */}
            <Provider theme = {defaultTheme} colorScheme="light">
            
                <Button variant="negative" onClick={showCal} isQuiet >Load</Button>
            
            </Provider>
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
Once a user enters an email, display their personal Google calendar 
in place of "enter email to load calendar"
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