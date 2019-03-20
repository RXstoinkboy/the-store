import {
    HANDLE_INPUT,
    HANDLE_SUBMIT,
    UPDATE_ORDERED_ITEMS
} from '../actions/types';

const initialData = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postal: '',
    city: '',
    orderedItems: [],
}

export const orderFormReducer = (state = initialData, action) => {
    switch (action.type){
        case HANDLE_INPUT:
                if (action.inputType === 'name'){
                    return Object.assign({}, state, {name: action.value});
                } else if (action.inputType === 'lastName'){
                    return Object.assign({}, state, {lastName: action.value});
                } else if (action.inputType === 'email'){
                    return Object.assign({}, state, {email: action.value});
                } else if (action.inputType === 'phone'){
                    return Object.assign({}, state, {phone: action.value});
                } else if (action.inputType === 'address'){
                    return Object.assign({}, state, {address: action.value});
                } else if (action.inputType === 'postal'){
                    return Object.assign({}, state, {postal: action.value});
                } else if (action.inputType === 'city'){
                    return Object.assign({}, state, {city: action.value});
                }
            ;
        case UPDATE_ORDERED_ITEMS:
            return Object.assign({}, state, {orderedItems: [...action.items]});
        case HANDLE_SUBMIT:
            return Object.assign({}, initialData);
        default:
            return state
    }
}