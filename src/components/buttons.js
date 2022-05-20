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
                <Button marginBottom={10} >Request Signature</Button>
                <Button marginBottom={10} variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Delivery</Button>
                <Calendar/>
                <PaymentButton rev={props.rev} pdfName={props.pdfName}/>
            </div>
        ) 
    }
}

