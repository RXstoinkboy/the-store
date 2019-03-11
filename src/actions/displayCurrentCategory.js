import {SELECT_CATEGORY} from './types';

export const displayCurrentCategory = (pathname) => {
    return {
        type: SELECT_CATEGORY,
        pathname
    }
}