import React, {Component} from 'react';
import Form from './Form';
import {Shade, Wrapper, Title} from './OrderForm.style';
import OrderedItems from './OrderedItems';

import {connect} from 'react-redux';

import {handleInput} from '../../../actions/handleInput';
import {handleSubmit} from '../../../actions/handleSubmit';
import {updateOrderedItems} from '../../../actions/updateOrderedItems';


class OrderForm extends Component {

    handleChange =e=> {
        this.props.handleInput(e.target.value, e.target.name);
    }

    handleFormSubmit =e=> {
        if(e.target.checkValidity()){
            console.log('message sent')
            this.props.handleSubmit();
        }
        
        e.preventDefault();
    }

    componentDidMount(){
        const orderedItems = this.props.allShopItems.filter(item => item.inCart);
        this.props.updateOrderedItems(orderedItems);
    }

    render(){
        return (
            <Shade>
                <Wrapper>
                    <Title>Fill the form to complete your order:</Title>
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