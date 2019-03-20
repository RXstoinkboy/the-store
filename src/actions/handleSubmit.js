import {HANDLE_SUBMIT} from './types';

export const handleSubmit = (items) => {
    return {
        type: HANDLE_SUBMIT,
        items
    }
}