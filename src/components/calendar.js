import React from "react"

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
                    "end": {
                        "dateTime": '2022-05-28T17:00:00-08:00:00'
                    },
                    "start": {
                        "dateTime": '2022-05-28T17:00:00-07:00:00'
                    }
                }

                var request = gapi.client.calendar.events.insert({
                    'calendarId':'primary',
                    'resource':event
                })

                request.execute(event => {
                    window.open(event.htmlLink, '_blank')
                })
            }).catch(e => {
                console.log(e)
            })
        })
    }

    return (
        <div>
            <button onClick={handleClick}>Add a event</button>
        </div>
    )
}

export default calendar