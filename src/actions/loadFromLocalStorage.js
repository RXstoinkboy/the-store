import {LOAD_LOCAL_STORAGE} from './types';

export const loadFromLocalStorage =(obj)=>{
    return {
        type: LOAD_LOCAL_STORAGE,
        obj
    }
}