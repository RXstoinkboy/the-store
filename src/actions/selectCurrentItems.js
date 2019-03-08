import {CURRENT_ITEMS} from './types';

export const selectCurrentItems = (path) => {
    return {
        type: CURRENT_ITEMS,
        path
    }
}