/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import Calendar from "./calendar";
import { CalendarInterface } from "./calendar-page";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

import {React, useState} from "react";
import InfoButton from "./info-button.js"
import './button.css';
import { PaymentButton } from "./paymentButton";
import { Highlight } from "./highlight";

//replace button
export const Buttons = (props) => {
    if(props.visibility) {
        console.log(props.PdfFile)
        return (
            <div className="buttons">
                <div className="description">
                    <p style={{ marginLeft: "35%", fontWeight:"bold", fontStyle: "italic"}}>Contract Information:</p>
                    <p>Expiration date: {props.date}</p>
                    <Highlight info={props.dateDesc}/>
                    <p>Date Description: {props.dateDesc}</p>
                    <p>Revenue Profit Sharing: {props.rev}</p>
                </div>
                <br></br>
                <Calendar/>
                <PaymentButton rev={props.rev} pdfName={props.pdfName}/>
            </div>
        ) 
    }
}

