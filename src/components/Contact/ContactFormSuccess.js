import React from 'react';
import styled from 'styled-components';

const ContactFormSuccess = () => {
    return (
        <Wrapper>
            <TextPrimary>Thank you for you message!</TextPrimary>
            <TextSecondary>We will contact you soon...</TextSecondary>
        </Wrapper>
    );
};

// styles - made them in one file because of very small size
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0 0 0 5vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(60deg, white, hsl(0, 0%, 70%));

    @media all and (max-width: 500px){
        padding: 0 0 0 10vh;
    }
`

const TextPrimary = styled.h1`
    font-size: 20vh;
    font-family: 'Kaushan Script';
    margin-bottom: 1rem;
`

const TextSecondary = styled.h3`
    font-family: 'PT Sans Narrow';
    font-size: 10vh;
`

export default ContactFormSuccess;