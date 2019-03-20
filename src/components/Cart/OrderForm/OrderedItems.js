import React from 'react';
import {totalAmount} from '../Cart';
import {Wrapper, List, Item} from './OrderedItems.style.js';

const OrderedItems = props => {
    return (
        <Wrapper>
            Order summary:
            <List>
                {props.orderFormReducer.orderedItems.map(item=>{
                    return <Item>
                        {`${item.ordered} x ${item.name}: ${item.ordered} x $${item.price}`}
                    </Item>
                })}
                {`TOTAL: $${totalAmount(props.orderFormReducer.orderedItems)}`}
            </List>
        </Wrapper>
    );
};

export default OrderedItems;