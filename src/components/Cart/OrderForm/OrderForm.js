import React, {Component} from 'react';
import Form from './Form';
import {Shade, Wrapper, Title} from './OrderForm.style';
import OrderedItems from './OrderedItems';
import {totalAmount} from '../Cart';

import {connect} from 'react-redux';

import {handleInput} from '../../../actions/handleInput';
import {handleSubmit} from '../../../actions/handleSubmit';
import {updateOrderedItems} from '../../../actions/updateOrderedItems';

import PropTypes from 'prop-types';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class OrderForm extends Component {

    handleChange =e=> {
        this.props.handleInput(e.target.value, e.target.name);
    }

    handleFormSubmit =e=> {
        const {name, lastName, address, postal, city, email, phone, orderedItems: orderedItemsArr} = this.props.orderFormReducer;
        
        const total = totalAmount(this.props.orderFormReducer.orderedItems);
        // by this time I will be sending ordered items list as a string
        const orderedItems = JSON.stringify(orderedItemsArr);

        const orderForm = document.getElementById('orderForm');
        if(orderForm.checkValidity()){
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: encode({ "form-name": "the-store_OrderForm", name, lastName, address, postal, city, email, phone, total, orderedItems })
            })
            .then(()=>console.log('Success!'))
            .then(()=>{
                // run handleSubmit method in Redux which should clear the cart
                this.props.handleSubmit();
            })
            .catch(error => alert(error));
        }

        console.log('message sent');
        
        // orderForm.preventDefault();
    }

    componentDidMount(){
        const orderedItems = this.props.allShopItems.filter(item => item.inCart);
        this.props.updateOrderedItems(orderedItems);
    }

    render(){
        return (
            <Shade key='orderFormShade' {...this.props}>
                <Wrapper key='orderFormWrapper'>
                    <Title key='orderFormTitle'>
                        {
                            !this.props.paymentScreen
                                ? 'Fill the form to complete your order:'
                                : 'Please proceed with payment to complete order:'
                        }
                        
                    </Title>
                    <Form key='orderFormForm'
                        {...this.props} 
                        handleFormSubmit={this.handleFormSubmit}
                        handleChange={this.handleChange} 
                        localState={this.localState}/>
                    <OrderedItems {...this.props}/>
                </Wrapper>
            </Shade>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        allShopItems: state.allShopItems,
        orderFormReducer: state.orderFormReducer
    }
}

const mapDispatchToProps = {
    updateOrderedItems,
    handleInput,
    handleSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

OrderForm.propTypes = {
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    orderFormReducer: PropTypes.object.isRequired,
    allShopItems: PropTypes.array.isRequired,
    updateOrderedItems: PropTypes.func.isRequired,
    paymentScreen: PropTypes.bool.isRequired

}