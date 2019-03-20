import {combineReducers} from 'redux';
import {allShopItems} from './allShopItems';
import {currentCategory} from './currentCategory';
import {currentlyHoveredItem} from './currentlyHoveredItem';
import {orderFormReducer} from './orderFormReducer';

export default combineReducers({
    allShopItems,
    currentCategory,
    currentlyHoveredItem,
    orderFormReducer
})
