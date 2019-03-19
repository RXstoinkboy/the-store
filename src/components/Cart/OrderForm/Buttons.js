import React from 'react';
import styled from 'styled-components';
import {Button as MockButton} from '../../Shop/Section/Display.style';

const Buttons = props => {
    return (
        <div>
            <Button onClick={props.handleClose}>back to cart</Button>
            <Button>PayPal</Button>
        </div>
    );
};

export default Buttons;

const Button = styled(MockButton)`
    grid-column: 1/-1;
`