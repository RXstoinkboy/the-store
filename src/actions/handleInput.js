import {HANDLE_INPUT} from './types';

export const handleInput = (value, inputType) => {
    return {
        type: HANDLE_INPUT,
        inputType,
        value
    }
}