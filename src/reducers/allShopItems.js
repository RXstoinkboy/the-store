import {ADD_ITEM, DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_FROM_CART} from '../actions/types';
import bags from './shopItems/bags';
import heels from './shopItems/heels';
import boots from './shopItems/boots';
import sneakers from './shopItems/sneakers';

import {cloneDeep} from 'lodash';

const allItems = [
    ...bags,
    ...heels,
    ...boots,
    ...sneakers
]

export const allShopItems = (state = allItems, action) => {
    switch (action.type){
        case ADD_ITEM:
                let addItemState = cloneDeep(state);
                const itemToAdd = addItemState.indexOf(addItemState.find(item => item.id === action.id));
                addItemState[itemToAdd].inCart = true;
                addItemState[itemToAdd].ordered++;
                addItemState[itemToAdd].amount--;
            return addItemState;

        case DECREASE_AMOUNT:
                let decAmountState = cloneDeep(state);
                const itemToDec = decAmountState.indexOf(decAmountState.find(item => item.id === action.id));
                decAmountState[itemToDec].amount++;
                decAmountState[itemToDec].ordered--;
            return decAmountState;

        case INCREASE_AMOUNT:
                let incAmountState = cloneDeep(state);
                const itemToInc = incAmountState.indexOf(incAmountState.find(item => item.id === action.id));
                incAmountState[itemToInc].amount--;
                incAmountState[itemToInc].ordered++;
            return incAmountState;

        case REMOVE_FROM_CART:
                let removeItemState = cloneDeep(state);
                const itemToRemove = removeItemState.indexOf(removeItemState.find(item => item.id === action.id));
                const howManyOrdered = removeItemState[itemToRemove].ordered;
                const howManyCurrentlyAvailable = removeItemState[itemToRemove].amount;
                removeItemState[itemToRemove].inCart = false;
                removeItemState[itemToRemove].ordered = 0;
                removeItemState[itemToRemove].amount = howManyCurrentlyAvailable + howManyOrdered;
            return removeItemState;
            
        default:
            return state
    }
}