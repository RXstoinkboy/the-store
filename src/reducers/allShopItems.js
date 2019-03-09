import {DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_FROM_CART} from '../actions/types';
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
        default:
            return state
    }
}