import {DECREASE_AMOUNT} from './types';

export const decreaseAmount = (id) => {
    return {
        type: DECREASE_AMOUNT,
        id
    }
}