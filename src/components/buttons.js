/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import React from "react";
import { Button } from "react-bootstrap";
import Calendar from "./calendar";


//replace button
export const Buttons = (props) => {
    if(props.visibility) {
        console.log(props.PdfFile)
        return (
            <div className="buttons">
                <p>Expiration date: {props.date}</p>
                <p>Date Description: {props.dateDesc}</p>
                <p>Revenue Profit Sharing: {props.rev}</p>
                <p>Revenue Profit Sharing Description: {props.revDesc}</p>
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Request Signature</Button>
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Delivery</Button>
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }} >Add Event to Calendar</Button>
                <Calendar/>
            </div>
        ) 
    }
}

// export const get_info = () => {
//     let info = document.getElementById('expiration').getAttribute('data_')
//     return (
//         <div>
//             {info}
//         </div>
//     )
// }

// const addCalendarEvent = (date) => {
//     authenticate()
//         .then(loadClient())
//         .then(() => {
//             gapi.load("client:auth2", function() {
//                 gapi.auth2.init({client_id: "1086848005499-rglvm92lfki3qiahkhrk444ngu3uroqt.apps.googleusercontent.com"});
//                 });
//             return gapi.client.calendar.events.insert({
//                 "resource": {
//                     "end": {
//                         "date": date
//                     },
//                     "start": {
//                         "date": date
//                     }
//                 }
//             })
//         })
//         .then(function(response) {
//             // Handle the results here (response.result has the parsed body).
//             console.log("Response", response);
//           },
//           function(err) { console.error("Execute error", err); });
        
// }
//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyDCozThxPApmqASiVVkFBgYgcZRO5hkP1E");
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.calendar.events.insert({
//       "resource": {
//         "end": {},
//         "start": {}
//       }
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("auth2", function() {
//     gapi.auth2.init({client_id:"1086848005499-rglvm92lfki3qiahkhrk444ngu3uroqt.apps.googleusercontent.com"});
//   });
