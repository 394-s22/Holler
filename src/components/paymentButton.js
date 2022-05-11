/*
Component to hold UI section / buttons on the right side of the screen when viewing a single PDF
*/
import {React, useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { createPromiseCapability } from "pdfjs-dist";

toast.configure();

//replace button
export const PaymentButton = (props) => {

    const [product] = useState({
        name: props.pdfName,
        price: 0.99,
        description: "Cool car"
      });
    
      async function handleToken(token, addresses) {
        const response = await axios.post(
          "https://ry7v05l6on.sse.codesandbox.io/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }

        return (
            <div className="containerPayment">
            <StripeCheckout
              stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
              token={handleToken}
              amount={product.price * 100}
              name="Tesla Roadster"
              billingAddress
              shippingAddress
            />
          </div>
        ) 
    }



