import React, { Component } from 'react';
import {ShopWrapper as CartWrapper, Title} from '../Shop/Shop.style';
import Item from './Item';
import {Wrapper, Total, PurchaseButton} from './Cart.style';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {decreaseAmount} from '../../actions/decreaseAmount'
import {increaseAmount} from '../../actions/increaseAmount'
import {removeItemFromCart} from '../../actions/removeItemFromCart'

class Cart extends Component {
    handleDecreaseAmount =(e)=>{
        this.props.decreaseAmount(e.target.id)
    }
    handleIncreaseAmount =(e)=>{
        this.props.increaseAmount(e.target.id)
    }
    handleRemoveItemFromCart =(e)=>{
        this.props.removeItemFromCart(e.target.id)
    }
    render() {
        return (
            <CartWrapper>
                <Title>Cart</Title>
                    <Wrapper>
                        {this.props.allItems.map(item => {
                            if (item.inCart === true){
                                return <Item 
                                            key={item.id}
                                            item={item}
                                            {...this.props}
                                            handleDecreaseAmount={this.handleDecreaseAmount}
                                            handleIncreaseAmount={this.handleIncreaseAmount}
                                            handleRemoveItemFromCart={this.handleRemoveItemFromCart}
                                        />
                            }
                        })}
                        <Total>Total amount: <span style={{textDecoration:'underline', marginLeft: '1rem'}}>${totalAmount(this.props.allItems)}</span></Total>
                        <PurchaseButton active>BUY NOW</PurchaseButton>
                    </Wrapper>
            </CartWrapper>
        );
    }
}

const totalAmount = (state) => {
    let total = 0;
    state.forEach(item => {
        if(item.inCart === true){
            total = total + (item.price * item.ordered);
        }
    })
    return total;
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allShopItems,
    }
};

const mapDispatchToProps = {
    decreaseAmount,
    increaseAmount,
    removeItemFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
    allItems: PropTypes.array.isRequired
}