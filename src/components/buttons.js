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
                <p>PDF Location: The initial term of this Agreement commences as of the Effective Date and, unless terminated earlier pursuant to any express provision of this Agreement, shall continue until five (5) years following the Effective Date (the "Initial Term").</p>
                <p>Expiration date: {props.date}</p>
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

