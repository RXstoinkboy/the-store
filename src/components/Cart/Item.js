import React from 'react';
import {ItemWrapper, Miniature, MiniatureWrapper, Name, AmountWrapper, More, Amount, Less, SubTotal, Delete} from './Item.style';
import PropTypes from 'prop-types';

const Item = props => {

    const {
        item, 
        handleDecreaseAmount, 
        handleIncreaseAmount,
        handleRemoveItemFromCart
    } = props;

    return (
        <ItemWrapper>
            <MiniatureWrapper color={item.color} >
                <Miniature src={item.img}/>
            </MiniatureWrapper>
            <Name>{item.name}</Name>
            <AmountWrapper>
                <Less
                    id={item.id} 
                    onClick={item.ordered > 1 
                                ? handleDecreaseAmount 
                                : handleRemoveItemFromCart
                            }>-</Less>
                <Amount value={item.ordered} readOnly/>
                <More
                    id={item.id} 
                    onClick={handleIncreaseAmount}>+</More>
            </AmountWrapper>
            <SubTotal>${item.price}</SubTotal>
            <Delete 
                id={item.id}
                onClick={handleRemoveItemFromCart}
                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="357px" height="357px" viewBox="0 0 357 357" style={{enableBackground:'new 0 0 357 357'}}>
                    <g id="clear">
                        <polygon id={item.id} points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                            214.2,178.5 		"/>
                    </g>
            </Delete>
        </ItemWrapper>
    );
};

export default Item;

Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleDecreaseAmount: PropTypes.func.isRequired,
    handleIncreaseAmount: PropTypes.func.isRequired,
    handleRemoveItemFromCart: PropTypes.func.isRequired,
}