import React from 'react';
import {Wrapper, Address, Line} from './ContactInfo.style';
import {Title} from './ContactForm.style';

const ContactInfo = () => {
    return (
        <Wrapper>
            <Title>Our location:</Title>
            <Address>
                <Line main>The Store</Line>
                <Line>711-2880 Nulla St.</Line>
                <Line>Mankato Mississippi 96522</Line>
                <Line>(257) 563-7401</Line>
                <Line>contact@thestore.com</Line>
            </Address>
        </Wrapper>
    );
};

export default ContactInfo;