import {ADD_ITEM} from './types';

export const addItemToCart = (item) => {
    return{
        type: ADD_ITEM,
        item
    }
}