import React from 'react';
import {Input} from '../../Contact/ContactForm.style';
import {Name, LastName,Mail,Street,Postal, City,Phone, FormWrapper} from './Form.style';

import Buttons from './Buttons';

const Form =props => {
    return (
        <FormWrapper>
            <Name>
                First name:
                <Input
                    required
                    type='text'
                    name='name'
                    placeholder='e.g. John'
                    pattern='[A-Za-z]{1,32}'
                    onChange={props.handleChange}
                    value={props.name}
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
                    value={props.lastName}
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
                    value={props.email}
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
                    value={props.phone}
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
                    value={props.address}
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
                    value={props.postal}
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
                    value={props.city}
                />
            </City>
            <Buttons {...props}/>
        </FormWrapper>
    );
};

export default Form;