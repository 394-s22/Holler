import Calendar from "./calendar";
import { CalendarInterface } from "./calendar-page";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

import {React, useState} from "react";
import InfoButton from "./info-button.js"
import './button.css';
import { PaymentButton } from "./paymentButton";
import { Highlight } from "./highlight";

/*
Component to hold email, pay, and add calendar event buttons,
as well as text highlight buttons.
Occupies the right half of the screen when viewing a single PDF.
*/

//replace button
export const Buttons = (props) => {
    if(props.visibility) {
        console.log(props.PdfFile)
        return (
            <div className="buttons">
                <div className="description">
                    
                    <p style={{ marginLeft: "35%", fontWeight:"bold", fontStyle: "italic"}}>Contract Information:</p>
                    <div className="descriptions">
                    <p><strong>Expiration Date:</strong> {props.date}</p>
                    <Highlight info={props.date}/>
                    </div>

                    <div className="descriptions">
                    <p><strong>Date Description:</strong> {props.dateDesc}</p>
                    <Highlight info={props.dateDesc}/>
                    </div>

                    <div className="descriptions">
                    <p><strong>Revenue Profit Sharing:</strong> {props.rev}</p>
                    <Highlight info={props.rev}/>
                    </div>
                </div>
                <br></br>
                <Calendar/>
                <PaymentButton rev={props.rev} pdfName={props.pdfName}/>
            </div>
        ) 
    }
}

