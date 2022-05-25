import React from "react";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
import {jQuery} from "jquery";
import { Trigger } from "@react-pdf-viewer/highlight";


export const Highlight = (props) => {
    
    console.log("priinting props")
    console.log(props);

    const handleClick = () => {
        console.log(document.getElementsByClassName('rpv-search__popover-footer-button rpv-search__popover-footer-button--ltr'));
        if (document.getElementsByClassName('rpv-search__popover-footer-button rpv-search__popover-footer-button--ltr').length === 0){
            document.getElementsByClassName('rpv-core__minimal-button')[3].click()
        }
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300)});
        return myPromise
        
    }
    return (
        <Button onPress={() => handleClick().then(() => {
            populate_search(props.info).then(()=>{
                trigger_search()
            })
        })} color = "green-500" variant="cta" size="lg" >Show Text</Button>
    );
};

const populate_search = (info) => {
        console.log(document.getElementsByClassName('rpv-core__textbox')[0])
        document.getElementsByClassName('rpv-core__textbox')[0].setAttribute('value', '19');
        console.log(document.getElementsByClassName('rpv-core__textbox')[0])
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300)});
        return myPromise
}


const trigger_search = () => {
    var e = jQuery.Event("keypress");
    e.which = 13; 
    document.getElementsByClassName('rpv-core__textbox')[0].trigger(e);
}