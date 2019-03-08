import {ADD_ITEM} from '../actions/types';

const initialState = [];

const manageItemsInCart =(state=initialState, action)=>{
    switch (action.type){
        case ADD_ITEM:
            return(
                state = state.find(action.item) === 'undefined' 
                    ? [...state, action.item]
                    : state;
            );
        default:
            return state;
    }
}

export default manageItemsInCart;