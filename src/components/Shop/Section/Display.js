import React from 'react';
import {Wrapper, Img, Button, Controls, Name, Price, Info, MoreInfo, Details} from './Display.style';
import {Link} from 'react-router-dom'

const Display = props => {
    return (
        <Wrapper color={props.currentHover.color}>
            <Img src={props.currentHover.img} />
            <Details>
                <Info>
                    <Name>{props.currentHover.name}</Name>
                    <Price>$ {props.currentHover.price}</Price>
                    {/* MAKE SOME KIND OF MODAL FOR MORE INFO */}
                    <MoreInfo />
                </Info>
                <Controls>
                    <Link to='/shop'>
                        <Button left>back to store</Button>
                    </Link>
                    <Button>add to cart</Button>
                </Controls>
            </Details>
        </Wrapper>
    );
};

export default Display;