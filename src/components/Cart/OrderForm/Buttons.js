import React from 'react';
import {Button} from '../../Shop/Section/Display.style';
import PayPalButton from './PayPalButton';

const Buttons = props => {
    return (
        <div style={{gridColumn: '1/-1', display:'flex', justifyContent:'flex-end', alignItems: 'center'}}>
            <Button onClick={props.handleClose} active>back to cart</Button>
            <PayPalButton {...props} type='submit'>PayPal</PayPalButton>
        </div>
    );
};

export default Buttons;