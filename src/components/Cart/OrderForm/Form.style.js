import styled from 'styled-components';
import {Name as MockName} from '../../Contact/ContactForm.style';

export const FormWrapper = styled.form`
    max-width: 90vw;
    display: grid;
    grid-template-columns: ${props => !props.paymentScreen ? '1fr 1fr' : '1fr'};

    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
    }
    
`

export const Name = styled(MockName)`
    grid-column: 1/2;
    /* display: ${props => !props.paymentScreen ? 'flex' : 'none'}; */
`

export const LastName = styled(Name)`
    grid-column: 2/3;
`

export const Phone = styled(Name)`
    grid-column: 2/3;
`

export const Street = styled(Name)`
    grid-column: 1/-1;
`

export const Mail = styled(Name)`
    grid-column: 1/2;
`

export const City = styled(Name)`
    grid-column: 2/3;
`

export const Postal = styled(Name)`
    grid-column: 1/2;
`
