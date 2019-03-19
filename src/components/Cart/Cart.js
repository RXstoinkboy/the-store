import React, { Component } from 'react';
import {ShopWrapper as CartWrapper, Title} from '../Shop/Shop.style';
import Item from './Item';
import {Wrapper, Total, PurchaseButton} from './Cart.style';
import OrderForm from './OrderForm/OrderForm';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {decreaseAmount} from '../../actions/decreaseAmount';
import {increaseAmount} from '../../actions/increaseAmount';
import {removeItemFromCart} from '../../actions/removeItemFromCart';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderForm: true
        }
    }

    // control amount of items in cart
    handleDecreaseAmount =(e)=>{
        this.props.decreaseAmount(e.target.id)
    }

    handleIncreaseAmount =(e)=>{
        this.props.increaseAmount(e.target.id)
    }

    handleRemoveItemFromCart =(e)=>{
        this.props.removeItemFromCart(e.target.id)
    }
    handleClose = (e) => {
        this.setState({
            orderForm: !this.state.orderForm
        })   
        e.preventDefault();
    }


    render() {
        return (
            <CartWrapper>
                <Title>Cart</Title>
                    {/* order form modal displayed after clicking to order */}
                    {this.state.orderForm ? <OrderForm handleClose={this.handleClose} /> : null}
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
                        <Total>Total amount: 
                            <span 
                                style={
                                    {
                                        marginLeft: '1rem',
                                        fontFamily: "'Kaushan Script', cursive"
                                    }
                                }
                            >
                                ${totalAmount(this.props.allItems)}
                            </span>
                        </Total>
                        <PurchaseButton active onClick={this.handleClose}>BUY NOW</PurchaseButton>
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