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
        },()=>{localStorage.setItem('contactForm', JSON.stringify(this.state))});
        // keep currently written data in local storage. Just for comfort
    }

    handleSubmit =e=> {
        if(e.target.checkValidity()){
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: encode({ "form-name": "contactForm", ...this.state })
            })
            .then(()=>console.log('Success!'))
            .then(()=>{
                // clear local storage after submiting form
                localStorage.removeItem('contactForm');
    
                this.setState({
                    name: '',
                    lastName: '',
                    mail: '',
                    message: ''
            })
            })
            .catch(error => alert(error));
        }

        e.preventDefault()
    }

    componentDidMount(){
        if(localStorage.getItem('contactForm')){
            const localState = JSON.parse(localStorage.getItem('contactForm'));
            const name = localState.name;
            const lastName = localState.lastName;
            const mail = localState.mail;
            const message = localState.message;
            
            this.setState({
                name,
                lastName,
                mail,
                message
            })
        }
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