/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import React from "react";
import { Button } from "react-bootstrap";


//replace button
export const Buttons = (props) => {
    if(props.visibility) {
        return (
            <div className="buttons">
                
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

