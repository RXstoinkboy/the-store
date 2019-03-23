import React from 'react';
import {Input} from '../../Contact/ContactForm.style';
import {Name, LastName,Mail,Street,Postal, City,Phone, FormWrapper} from './Form.style';
import PayPalButton from './PayPalButton';
import {totalAmount} from '../Cart';

import PropTypes from 'prop-types';

import Buttons from './Buttons';

const Form =props => {
    const displayInputs = !props.paymentScreen ? {display: "flex"} : {display: "none"};

    const total = totalAmount(props.orderFormReducer.orderedItems);
    const orderedItems = JSON.stringify(props.orderFormReducer.orderedItems);

    return (
        <React.Fragment>
            {/* render paypal button only if data was filled in correctly */}
            <FormWrapper
                id='orderForm'
                onSubmit={props.handleFormSubmit}
                paymentScreen={props.paymentScreen}
                action='/cart/success'
                name='the-store_OrderForm'
            >
            {
                props.paymentScreen
                    && <PayPalButton key='payPalButton' {...props} type='submit'>PayPal</PayPalButton>
            }
            
                <Name style={displayInputs}>
                    First name:
                    <Input
                        required
                        type='text'
                        name='name'
                        placeholder='e.g. John'
                        pattern='[A-Za-z]{1,32}'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.name}
                    />
                </Name>
                <LastName style={displayInputs}>
                    Last name:
                    <Input 
                        required
                        type='text'
                        name='lastName'
                        pattern='[A-Za-z]{1,32}'
                        placeholder='e.g. Smith'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.lastName}
                    />
                </LastName>
                <Mail style={displayInputs}>
                    e-mail:
                    <Input 
                        required
                        type='email'
                        name='email'
                        placeholder='e.g. john.smith@mail.xyz'
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        onChange={props.handleChange}
                        value={props.orderFormReducer.email}
                    />
                </Mail>
                <Phone style={displayInputs}>
                    Phone:
                    <Input 
                        required
                        type='text'
                        name='phone'
                        placeholder='e.g. 123456789'
                        pattern='^\d{9}$'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.phone}
                    />
                </Phone>
                <Street style={displayInputs}>
                    Address:
                    <Input 
                        required
                        type='text'
                        name='address'
                        placeholder='e.g. 711-2880 Nulla St'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.address}
                    />
                </Street>
                <Postal style={displayInputs}>
                    Postal code:
                    <Input 
                        required
                        type='text'
                        name='postal'
                        placeholder='e.g. 96522'
                        pattern='^\d{5}$'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.postal}
                    />
                </Postal>
                <City style={displayInputs}>
                    City:
                    <Input 
                        required
                        type='text'
                        name='city'
                        placeholder='e.g. Mankato Mississippi'
                        onChange={props.handleChange}
                        value={props.orderFormReducer.city}
                    />
                </City>
                {/* data about the order */}
                    <input 
                        hidden
                        readOnly
                        type='number'
                        name='total'
                        value={total}
                    />
                    <input 
                        hidden
                        readOnly
                        type='text'
                        name='orderedItems'
                        value={orderedItems}
                    />
                
                {/* navigation buttons */}
                <Buttons 
                    {...props}/>
            </FormWrapper>
                

        </React.Fragment>
    );
};

export default Form;

Form.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePaymentScreen: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    paymentScreen: PropTypes.bool.isRequired,
    orderFormReducer: PropTypes.object.isRequired,
}