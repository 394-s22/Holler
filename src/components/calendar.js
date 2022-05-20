import React from "react"
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

const calendar = () =>{
    var gapi = window.gapi
    var CLIENT_ID = "1086848005499-rglvm92lfki3qiahkhrk444ngu3uroqt.apps.googleusercontent.com"
    var API_KEY = "AIzaSyDCozThxPApmqASiVVkFBgYgcZRO5hkP1E"
    var DISCOVERY_DOC = "https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () =>{
        gapi.load('client:auth2', () =>{
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOC,
                scope: SCOPES
            })

            gapi.client.load('calendar', 'v3', () =>{
                console.log('loading calendar')
            })

            gapi.auth2.getAuthInstance().signIn().then(() => {
                console.log("Signed in")


                var event = {
                    'summary': 'CO-PROMOTION AGREEMENT-DOVA PHARMACEUTICALS, INC',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'This Agreement shall become effective as of the Effective Date and, unless earlier terminated as provided in this ARTICLE 12, shall extend until the four (4) year anniversary of the Effective Date (the "Term").',
                    'start': {
                      'dateTime': '2022-09-26T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': '2022-09-26T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                      {'email': 'yijianli2023@u.northwestern.edu'},
                      {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                  };
                
                var request = gapi.client.calendar.events.insert({
                    'calendarId':'primary',
                    'resource':event
                })
                console.log(request)
                request.execute(event => {
                    window.open(event.htmlLink, '_blank')
                    // appendPre('Event created: ' + event.htmlLink);
                })
            }).catch(e => {
                console.log(e)
            })
        })
    }

    return (
        <>
            <Button color = "green-500" variant="cta" size="lg" onClick={handleClick}>Add a event</Button>
        </>
    )
}
function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }
export default calendar