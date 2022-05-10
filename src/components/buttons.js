/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import {React, useState} from "react";
import { Button } from "react-bootstrap";


//replace button
export const Buttons = (props) => {
    const [info_vis, set_info_vis] = useState(false);
    const change_info_vis = () =>{
        set_info_vis(!info_vis);
    }
    if(props.visibility) {
        console.log(props.PdfFile)
        return (
            <div className="buttons">
                
                <Button onClick = {change_info_vis} variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Information</Button>
                {info_vis? <p><p>Expiration date: {props.date}</p>
                <p>Date Description: {props.dateDesc}</p>
                <p>Revenue Profit Sharing: {props.rev}</p>
                <p>Revenue Profit Sharing Description: {props.revDesc}</p></p> : null}
                <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Request Signature</Button>
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

