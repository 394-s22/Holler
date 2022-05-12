/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import {React, useState} from "react";
import { Button } from "react-bootstrap";
import InfoButton from "./info-button.js"

import './button.css';
//awesomefont
//replace button
export const Buttons = (props) => {
    if(props.visibility) {
        console.log(props.PdfFile)
        return (
            <div className="buttons">
                <InfoButton props={props}/>
                <br></br>
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Request Signature</Button>
                <br></br>
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Delivery</Button>
            </div>
        ) 
    }
}

export const get_info = () => {
    let info = document.getElementById('expiration').getAttribute('data_')
    return (
        <div>
            {info}
        </div>
    )
}