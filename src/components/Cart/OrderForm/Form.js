import React from 'react';
import {Input} from '../../Contact/ContactForm.style';
import {Name, LastName,Mail,Street,Postal, City,Phone, FormWrapper} from './Form.style';
import PayPalButton from './PayPalButton';
import {totalAmount} from '../Cart';

import Buttons from './Buttons';

const Form =props => {
    const displayInputs = !props.paymentScreen ? {display: "flex"} : {display: "none"};
    return (
        <React.Fragment>
            {/* render paypal button only if data was filled in correctly */}
            <FormWrapper
                id='orderForm'
                onSubmit={props.handleFormSubmit}
                paymentScreen={props.paymentScreen}
                action='/'
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
                        style={{display: 'none'}}
                        readOnly
                        type='number'
                        name='total'
                        value={totalAmount(props.orderFormReducer.orderedItems)}
                    />
                    <input 
                        style={{display: 'none'}}
                        readOnly
                        type='text'
                        name='orderedItems'
                        value={JSON.stringify(props.orderFormReducer.orderedItems)}
                    />
                


                {/* {props.paymentScreen
                    ? <PayPalButton {...props} type='submit'>PayPal</PayPalButton>
                    : <React.Fragment>
                        <Name>
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
                        <LastName>
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
                        <Mail>
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
                        <Phone>
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
                        <Street>
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
                        <Postal>
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
                        <City>
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
                    </React.Fragment>
                } */}
                {/* navigation buttons */}
                <Buttons 
                    {...props}/>
            </FormWrapper>
                

        </React.Fragment>
    );
};

export default Form;