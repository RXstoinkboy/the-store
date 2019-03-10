import {REMOVE_FROM_CART} from '../actions/types';
import {INCREASE_AMOUNT} from '../actions/types';
import {DECREASE_AMOUNT} from '../actions/types';
import {ADD_ITEM} from '../actions/types';

export const itemsInCart = ( state = [], action) => {
    switch (action.type){
        case ADD_ITEM:
            return [...state, action.item];
        case REMOVE_FROM_CART:
            return 'cart';
        case INCREASE_AMOUNT:
            return state;
        case DECREASE_AMOUNT:
            return state;
        default: 
            return state
    }
}