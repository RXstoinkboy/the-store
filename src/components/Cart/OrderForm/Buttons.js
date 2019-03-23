import React from 'react';
import {Button} from '../../Shop/Section/Display.style';


const Buttons = props => {
    return (
        <div style={{gridColumn: '1/-1', display:'flex', justifyContent:'flex-end', alignItems: 'center'}}>
            <Button key='backButton' onClick={props.handleClose} active>back to cart</Button>
            <Button 
                key='toggleButton'
                onClick={props.handlePaymentScreen} 
                active
            >
            {
                !props.paymentScreen
                    ? 'go to payment'
                    : 'back'
            }
            </Button>
        </div>
    );
};

export default Buttons;