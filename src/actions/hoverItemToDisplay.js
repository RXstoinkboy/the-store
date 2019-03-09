import {HOVER_ITEM} from './types';

export const hoverItemToDisplay = (id) => {
    return {
        type: HOVER_ITEM,
        id
    }
}