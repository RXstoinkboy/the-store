import sneakers from './shopItems/sneakers';
import boots from './shopItems/boots';
import bags from './shopItems/bags';
import heels from './shopItems/heels';
import {
    CURRENT_ITEMS,
    HOVER_ITEM,
} from '../actions/types';

const initialState = {sneakers,boots,bags,heels};

const manageItemsInShop = (state = initialState, action) => {
    switch (action.type){
        case CURRENT_ITEMS:
            switch(action.path){
                case '/shop/sneakers':
                    return Object.assign({}, state.sneakers);
                case '/shop/boots':
                    return Object.assign({}, state.boots);
                case '/shop/bags':
                    return Object.assign({}, state.bags);
                case '/shop/womenshoes':
                    return Object.assign({}, state.heels);
                default:
                    return state = initialState;
        }
        default:
            return state = initialState;
    }
}

export default manageItemsInShop;