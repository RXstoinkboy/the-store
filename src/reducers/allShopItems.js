import {
    ADD_ITEM, 
    DECREASE_AMOUNT, 
    INCREASE_AMOUNT, 
    REMOVE_FROM_CART,
} from '../actions/types';
import bags from './shopItems/bags';
import heels from './shopItems/heels';
import boots from './shopItems/boots';
import sneakers from './shopItems/sneakers';

const allItems = [
    ...bags,
    ...heels,
    ...boots,
    ...sneakers
]

export const allShopItems = (state = allItems, action) => {
    switch (action.type){
        case ADD_ITEM:
            return state.map(item => 
                item.id === action.id 
                ? {...item,
                    inCart: true,
                    ordered: item.ordered+1,
                    amount: item.amount-1 }
                : item);

        case DECREASE_AMOUNT:
            return state.map(item => 
                item.id === action.id && item.ordered > 0
                ? {...item,
                    ordered: item.ordered-1,
                    amount: item.amount+1 }
                : item);

        case INCREASE_AMOUNT:
            return state.map(item => 
                item.id === action.id && item.amount > 0
                ? {...item,
                    ordered: item.ordered+1,
                    amount: item.amount-1 }
                : item);

        case REMOVE_FROM_CART:
            return state.map(item => 
                item.id === action.id 
                ? {...item,
                    inCart: false,
                    amount: item.amount + item.ordered,
                    ordered: 0}
                
                : item);

        // case LOAD_LOCAL_STORAGE:
        //     return Object.assign({}, {val: action.obj})

        default:
            return state
    }
}