import React from 'react';
import {Wrapper, Tile, Title, Text, Img, Boom} from './Grid.style';
import shoppingCart from '../../images/shoppingCart.png';
import location from '../../images/location.png';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types'; 

const Grid = props => {
    return (
        <Wrapper>
            {props.texts.map((text, idx) => 
                {
                    if (props.titles[idx] === `Let's go!`) {
                            return (
                                <Link to='/shop' key={idx}>
                                    <Tile>
                                        <Title>{props.titles[idx]}</Title>
                                            <Img
                                                src={shoppingCart} 
                                                />
                                        <Boom color={props.colors[idx]}/>
                                    </Tile>
                                </Link>
                            )
                    } else if (props.titles[idx] === `where we are?`) {
                            return (
                                <Link to='/contact' key={idx}>
                                    <Tile>
                                        <Title>{props.titles[idx]}</Title>
                                            <Img
                                                src={location} 
                                                />
                                        <Boom color={props.colors[idx]}/>
                                    </Tile>
                                </Link>
                            )
                    } else {
                            return (
                                <Tile key={idx}>
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

Grid.propTypes = {
    titles: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    texts: PropTypes.array.isRequired
}