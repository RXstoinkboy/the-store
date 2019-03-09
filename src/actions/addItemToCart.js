import {ADD_ITEM} from './types';

export const addItemToCart = (id) => {
    return{
        type: ADD_ITEM,
        id
    }
}