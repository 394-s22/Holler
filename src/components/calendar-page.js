
import {Provider, defaultTheme, Button, View} from '@adobe/react-spectrum';
import { height } from '@mui/system';

/*
Component to display a widget of the user's Google calendar if they have entered email.
Otherwise, prompts them to enter email.
*/
export const CalendarInterface = (props) => {
    if(props.visibility) {
        return(
            <>
            <h3 style={{ flexDirection: 'row'}}>View your calendar: <input type="email" placeholder="user@gmail.com" id="email"/>
            <Provider theme = {defaultTheme} colorScheme="light">
                <View backgroundColor={{
                    base: 'gray-50',
                    tablet: 'gray-50',
                    desktop: 'gray-50',
                    }}> 
                     <Button variant="cta" onClick={showCal} color = "green-500" size="lg">Load</Button>
                </View>
            </Provider>
            </h3>
            

            {/* </h3> */}
            <div id="calendarEmbedWrapper">
                <iframe id="calendarEmbed"></iframe>
                <div id="calendarEmbedBlocker">
                    <p class="email-prompt"></p>
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