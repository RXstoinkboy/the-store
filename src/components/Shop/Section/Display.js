import React from 'react';
import {Wrapper, Img, Button, Controls} from './Display.style';
import {Link} from 'react-router-dom'

const Display = props => {
    return (
        <Wrapper color={props.currentHover.color}>
            <Img src={props.currentHover.img} />
            <Controls>
                <Link to='/shop'>
                    <Button left>back to store</Button>
                </Link>
                <Button>add to cart</Button>
            </Controls>
        </Wrapper>
    );
};

export default Display;