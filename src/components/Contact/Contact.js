import React, { Component } from 'react';
import {Title} from '../Shop/Shop.style';
import {Wrapper} from './Contact.style';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
        return(
            <React.Fragment>
                <Title>Contact</Title>
                <Wrapper>
                    <ContactForm />
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Contact;