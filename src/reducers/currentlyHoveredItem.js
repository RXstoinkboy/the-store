import {HOVER_ITEM} from '../actions/types';

export const currentlyHoveredItem = (state = 'brownBoots', action) => {
    switch (action.type){
        case HOVER_ITEM:
            return action.id;
        default:
            return state
    }
}