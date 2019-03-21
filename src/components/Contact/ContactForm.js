import React from 'react';
import {Wrapper, Title, Form, Input, Name, LastName, Mail, Message} from './ContactForm.style.js';
import {Button} from '../Shop/Section/Display.style';

const ContactForm = props => {
    return (
        <Wrapper>
                <Title>Fill the form to contact us:</Title>
                <Form 
                    onSubmit={props.handleSubmit}
                    action='/contact/success'
                    name='contactForm'
                    >
                    <Name>
                        Please enter your name:
                        <Input
                            type='text'
                            name='name'
                            placeholder='e.g. John'
                            required
                            onChange={props.handleChange}
                            value={props.name} />
                    </Name>
                    <LastName>
                        Please enter your last name:
                        <Input
                            type='text'
                            name='lastName'
                            placeholder='e.g. Smith'
                            required
                            onChange={props.handleChange}
                            value={props.lastName} />
                    </LastName>
                    <Mail>
                        Please enter your e-mail address:
                        <Input
                            type='email'
                            name='mail'
                            placeholder='example@email.com'
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            required
                            onChange={props.handleChange}
                            value={props.mail} />
                    </Mail>
                    <Message>
                        How can we help you?
                        <Input
                            type='text'
                            name='message'
                            placeholder='Please enter your message here'
                            required
                            onChange={props.handleChange}
                            value={props.message} />
                    </Message>
                    <Button
                        type='submit'
                        style={{
                            gridColumn: '1/-1',
                            justifySelf: 'end',
                            margin: '1rem'
                        }} 
                        active
                    >
                        submit
                    </Button>
                </Form>
            </Wrapper>
    );
};

export default ContactForm;