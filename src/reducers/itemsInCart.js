import {REMOVE_FROM_CART} from '../actions/types';
import {INCREASE_AMOUNT} from '../actions/types';
import {DECREASE_AMOUNT} from '../actions/types';

export const itemsInCart = ( state = [], action) => {
    switch (action.type){
        case REMOVE_FROM_CART:
            return 'cart';
        default: 
            return state
    }
}