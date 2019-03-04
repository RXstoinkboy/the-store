import React from 'react';
import {Wrapper, Img} from './Display.style';

const Display = props => {
    return (
        <Wrapper color={props.currentHover.color}>
            <Img src={props.currentHover.img} />
        </Wrapper>
    );
};

export default Display;