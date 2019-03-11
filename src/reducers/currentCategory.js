import {SELECT_CATEGORY} from '../actions/types';

export const currentCategory = (state = '', action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            switch(action.pathname){
                case '/shop/sneakers':
                    return 'sneakers';
                case '/shop/boots':
                    return 'boots';
                case '/shop/bags':
                    return 'bags';
                case '/shop/womenshoes':
                    return `heels`;
                default:
                    return state;
                }
        default:    
            return state;
    }
}