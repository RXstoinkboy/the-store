import React, {Component} from 'react';
import Form from './Form';
import {Shade, Wrapper, Title} from './OrderForm.style';
import OrderedItems from './OrderedItems';

import {connect} from 'react-redux';

import {handleInput} from '../../../actions/handleInput';
import {handleSubmit} from '../../../actions/handleSubmit';
import {updateOrderedItems} from '../../../actions/updateOrderedItems';

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
        // console.log(document.getElementById('orderForm'));
        const orderForm = document.getElementById('orderForm');
        if(orderForm.checkValidity()){
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: encode({ "form-name": "the-store_OrderForm", ...this.props })
            })
            .then(()=>console.log('Success!'))
            .then(()=>{
                // run handleSubmit method in Redux
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
            <Shade>
                <Wrapper>
                    <Title>
                        {
                            !this.props.paymentScreen
                                ? 'Fill the form to complete your order:'
                                : 'Please proceed with payment to complete order:'
                        }
                        
                    </Title>
                    <Form 
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