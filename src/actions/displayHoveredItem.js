import {HOVER_ITEM} from './types';

export const displayHoveredItem = target => {
    return {
        type: HOVER_ITEM,
        target
    }
}