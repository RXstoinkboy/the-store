import React, { Component } from 'react';
import {ShopWrapper as CartWrapper, Title} from '../Shop/Shop.style';
import Item from './Item';
import {Wrapper, Total, PurchaseButton} from './Cart.style'

class Cart extends Component {
    render() {
        return (
            <CartWrapper>
                <Title>Cart</Title>
                    <Wrapper>
                        <Item />
                        <Total>$90</Total>
                        <PurchaseButton>BUY NOW</PurchaseButton>
                    </Wrapper>
            </CartWrapper>
        );
    }
}

export default Cart;