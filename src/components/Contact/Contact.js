import React, { Component } from 'react';
import {Title} from '../Shop/Shop.style';
import {Wrapper} from './Contact.style';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

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

    handleSubmit =e=> {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encode({ "form-name": "contactForm", ...this.state })
        })
        .then(()=>alert('Success!'))
        .catch(error => alert(error));
        
        e.preventDefault()
    }

    render() {
        return(
            <React.Fragment>
                <Title>Contact</Title>
                <Wrapper>
                    <ContactForm
                        {...this.state}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />
                    <ContactInfo />
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Contact;