import {UPDATE_ORDERED_ITEMS} from './types';

export const updateOrderedItems = (items) => {
    return {
        type: UPDATE_ORDERED_ITEMS,
        items
    }
}