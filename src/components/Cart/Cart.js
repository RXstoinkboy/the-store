import React, { Component } from 'react';
import {ShopWrapper as CartWrapper, Title} from '../Shop/Shop.style';
import Item from './Item';
import {Wrapper, Total, PurchaseButton} from './Cart.style';
import PropTypes from 'prop-types';

class Cart extends Component {
    render() {
        return (
            <CartWrapper>
                <Title>Cart</Title>
                    <Wrapper>
                        <Item />
                        <Total>Total amount: <span style={{textDecoration:'underline', marginLeft: '1rem'}}>$90</span></Total>
                        <PurchaseButton>BUY NOW</PurchaseButton>
                    </Wrapper>
            </CartWrapper>
        );
    }
}

export default Cart;

Cart.propTypes = {
    items: PropTypes.array.isRequired
}