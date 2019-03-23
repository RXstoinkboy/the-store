import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const OrderFormSuccess = props => {
    return (
        <Wrapper>
            <TextPrimary>Thank you for your order</TextPrimary>
            <TextSecondary>We will contact you soon...</TextSecondary>
        </Wrapper>
    );
};

export default OrderFormSuccess;

OrderFormSuccess.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handlePaymentScreen: PropTypes.func.isRequired
}

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
`

const TextPrimary = styled.h1`
    font-size: 7vh;
    font-family: 'Kaushan Script';
    text-align: center;
`

const TextSecondary = styled.h3`
    font-family: 'PT Sans Narrow';
    font-size: 2vh;
    text-align: center;
`