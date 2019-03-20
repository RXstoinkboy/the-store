import React from 'react';
import Form from './Form';
import {Shade, Wrapper, Title} from './OrderForm.style';

const OrderForm =props=> {
    return (
        <Shade>
            <Wrapper>
                <Title>Fill the form to complete your order:</Title>
                <Form {...props}/>
                {/* <OrderedItems /> */}
            </Wrapper>
        </Shade>
    );
    
}

export default OrderForm;