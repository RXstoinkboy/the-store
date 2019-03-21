import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

import {totalAmount} from '../Cart';
 
export default class MyApp extends React.Component {
    render() {
        // data from the form
        const {address, city, postal, name, lastName, phone, orderedItems} = this.props.orderFormReducer;
        
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            		console.log("The payment was succeeded!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            this.props.handleFormSubmit();
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        // let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
        
        let shipping = 2;

        // additional options
        const paymentOptions = {
            transactions: [{
                shipping_address: {
                    recipient_name: `${name} ${lastName}`,
                    line1: `${address}`,
                    city: `${city}`,
                    postal_code: `${postal}`,
                    phone: `${phone}`
                  },
                item_list: orderedItems,
                note_to_payer: 'Please contact us for any details'
            }]
        }

        const style = {
            size: 'responsive',
            color: 'blue',
            shape: 'rect',
            label: 'checkout',
            tagline: 'true'
        }

        const client = {
            sandbox:    'AZ4CT72jZY10fePbcKwnvuc_3Pwgb3kNlvmMGeLuqKm7sEBGXPimYxROP0tUbuBRcl_qpmQXYH29Bosl',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn
                env={env} 
                style={style}
                client={client} 
                currency={currency} 
                shipping={shipping}
                total={totalAmount(this.props.orderFormReducer.orderedItems)} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel} 
                paymentOptions={paymentOptions}
            />
        );
    }
}