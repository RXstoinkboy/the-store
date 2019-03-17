import React, { Component } from 'react';
import {Title} from '../Shop/Shop.style';
import {Wrapper} from './Contact.style';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            mail: '',
            message: ''
        }
    }

    handleChange =e=> {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <React.Fragment>
                <Title>Contact</Title>
                <Wrapper>
                    <ContactForm
                        {...this.state}
                        handleChange={this.handleChange} />
                    <ContactInfo />
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Contact;