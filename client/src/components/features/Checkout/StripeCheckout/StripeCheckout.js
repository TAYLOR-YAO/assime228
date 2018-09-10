import React, {Component} from "react";
import StripeCheckout from 'react-stripe-checkout';
import "./StripeCheckout.css";
    
    export default class Checkout extends Component { 
      onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            console.log(data)
            alert(`We are in business, ${data.email}`);
          });
        });
      }
    
      render() {
        return (
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_cM23Qzh2EOsyccPOWDoXmVUA"
          />
        )
      }
    }