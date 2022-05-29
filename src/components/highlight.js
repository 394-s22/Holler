import React from "react";
import {jQuery} from "jquery";
import { Trigger } from "@react-pdf-viewer/highlight";
import {Button, Provider, defaultTheme,lightTheme} from '@adobe/react-spectrum'



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
        <Provider className = "text-btn" theme = {defaultTheme} colorScheme="light">
            <Button  variant="cta" onPress={() => handleClick().then(() => {
                populate_search(props.info).then(()=>{
                    trigger_search()
                })
            })} color = "green-500" size="lg" >Show Text</Button>
        </Provider>
    );
};


const populate_search = (info) => {
        console.log(document.getElementsByClassName('rpv-core__textbox')[0])
        // setting the value in the search textbox
        if(info.length > 100) {
            info = info.substring(0, 100)
        }
        document.getElementsByClassName('rpv-core__textbox')[0].setAttribute('value', info);
        console.log(document.getElementsByClassName('rpv-core__textbox')[0])
        // dummy promise to keep things in order
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300)});
        return myPromise
}


const trigger_search = () => {
    console.log("hello")
    console.log(document.getElementsByClassName('rpv-core__textbox')[0].value)
    var e = jQuery.Event("keypress");
    e.which = 13; // enter
    document.getElementsByClassName('rpv-core__textbox')[0].trigger();
}