import React from "react";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';



export const Highlight = (props) => {
    console.log("search element");
    
    console.log("priinting props")
    console.log(props);
    return (
        <Button onPress={handleClick} color = "green-500" variant="cta" size="lg" >Show Text</Button>
    );
};

const handleClick = () => {
    document.getElementsByClassName('rpv-core__minimal-button')[3].click()
}