import {INCREASE_AMOUNT} from './types';

export const increaseAmount = (id) => {
    return {
        type: INCREASE_AMOUNT,
        id
    }
}