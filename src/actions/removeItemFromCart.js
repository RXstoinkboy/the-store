import {REMOVE_FROM_CART} from './types';

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}