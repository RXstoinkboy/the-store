import {
    HANDLE_INPUT,
    HANDLE_SUBMIT
} from '../actions/types';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postal: '',
    city: '',
    orderedItems: [],
}

export const orderFormReducer = (state = initialState, action) => {
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
        case HANDLE_SUBMIT:
        // TODO clear data if eveything was correctly sent
            return Object.assign({}, state, 
                    {orderedItems: action.items}
                );
        default:
            return state
    }
}