import React from 'react';
import {Input} from '../../Contact/ContactForm.style';
import {Name, LastName,Mail,Street,Postal, City,Phone, FormWrapper} from './Form.style';

import Buttons from './Buttons';

const Form =props => {
    return (
        <FormWrapper>
            <Name>
                First name:
                <Input />
            </Name>
            <LastName>
                Last name:
                <Input />
            </LastName>
            <Mail>
                e-mail:
                <Input />
            </Mail>
            <Phone>
                Phone:
                <Input />
            </Phone>
            <Street>
                Street:
                <Input />
            </Street>
            <Postal>
                POST code:
                <Input />
            </Postal>
            <City>
                City:
                <Input />
            </City>
            <Buttons {...props}/>
        </FormWrapper>
    );
};

export default Form;