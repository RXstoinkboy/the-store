import React from 'react';
import {Wrapper, Tile, Title, Text, Img, Boom} from './Grid.style';
import shoppingCart from '../../images/shoppingCart.png';
import {Link} from 'react-router-dom';

const Grid = props => {
    return (
        <Wrapper>
            {props.texts.map((text, idx) => 
                {
                    if (props.titles[idx] === `Let's go!`) {
                            return (
                                <Link to='/shop'>
                                    <Tile>
                                        <Title>{props.titles[idx]}</Title>
                                            <Img
                                                src={shoppingCart} 
                                                />
                                        <Boom color={props.colors[idx]}/>
                                    </Tile>
                                </Link>
                            )

                    } else {
                            return (
                                <Tile>
                                    <Title>{props.titles[idx]}</Title>
                                    <Text color={props.colors[idx]}>{text}</Text>
                                </Tile>
                            )

                    }
                }
            )}
        </Wrapper>
    );
};

export default Grid;