/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import React from "react";
import { Button } from "react-bootstrap";

export const Buttons = () => {
    return (
        <div className="buttons">
            <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Download</Button>
            <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Request Signature</Button>
            <Button variant="primary" size="lg" style={{ backgroundColor: "#00B1E1" }}>Delivery</Button>
        </div>
    )    
    
}

