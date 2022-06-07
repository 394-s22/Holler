import React from "react";
import {Button, Provider, defaultTheme,lightTheme, View} from '@adobe/react-spectrum'
import {Linking} from "react-native";

export const Email = (props) => {

    function sendMail(props) {
        console.log("hello??");
        
        Linking.openURL(`mailto:john@gmail.com?subject=URGENT: Contract&body=${props.info}`) ;
    }

    return (
        <div className="addEButt">
            <br></br>
     
        <Provider theme = {defaultTheme} colorScheme="light">
                <View backgroundColor={{
                    base: 'gray-50',
                    tablet: 'gray-50',
                    desktop: 'gray-50'
                    }}> 
                    <Button  variant="cta" onPress={() =>
                        sendMail(props)

                    } color = "green-500" size="lg" >Email</Button>
                </View>
        </Provider>
        </div>

    );
};


