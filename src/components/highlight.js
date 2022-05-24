import React from "react";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';



export const Highlight = (props) => {
    
    console.log("priinting props")
    console.log(props);

    const handleClick = () => {
        document.getElementsByClassName('rpv-core__minimal-button')[3].click()
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300)});
        return myPromise
        
    }
    return (
        <Button onPress={() => handleClick().then(() => {
            populate_search(props.info)
        })} color = "green-500" variant="cta" size="lg" >Show Text</Button>
    );
};

const populate_search = (info) => {
        console.log(document.getElementsByClassName('rpv-core__textbox')[0])
        document.getElementsByClassName('rpv-core__textbox')[0].value = info
}