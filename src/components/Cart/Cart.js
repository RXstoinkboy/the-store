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

import posed, {PoseGroup} from 'react-pose';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderForm: false,
            paymentScreen: false
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
        console.log('open modal');
        e.preventDefault();
    }
    handlePaymentScreen =e=> {
        if(e.target.closest('form').checkValidity()){
            this.setState({
                paymentScreen: !this.state.paymentScreen
            })
        }
        
        e.preventDefault();
    }


    render() {
        return (
            <CartWrapper>
                <Title>Cart</Title>
                    {/* order form modal displayed after clicking to order */}
                    <PoseGroup>
                        {   
                            this.state.orderForm 
                            && [
                                <OrderForm 
                                    key='orderFormModal'
                                    {...this.props}
                                    {...this.state}
                                    handleClose={this.handleClose}
                                    handlePaymentScreen={this.handlePaymentScreen}
                                />
                            ]
                        }
                    </PoseGroup>

                    {/* in cart items */}
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
                        <PurchaseButton 
                            active={!totalAmount(this.props.allItems) ? false : true}
                            disabled={!totalAmount(this.props.allItems) ? true : false}
                            onClick={this.handleClose}
                        >
                            BUY NOW
                        </PurchaseButton>
                    </Wrapper>
            </CartWrapper>
        );
    }
}

export const totalAmount = (state) => {
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