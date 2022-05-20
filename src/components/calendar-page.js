
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
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