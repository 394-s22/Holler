/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import React from "react";
import { Button } from "react-bootstrap";

export const Buttons = () => {
    console.log('test');
    return (
        <div className="buttons">
            
            <Button variant="primary" size="lg">Download</Button>
            <Button variant="primary" size="lg">Request Signature</Button>
            <Button variant="primary" size="lg">Delivery</Button>
        </div>
    )    
    
}

