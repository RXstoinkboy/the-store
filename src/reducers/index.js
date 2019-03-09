import { combineReducers } from 'redux';
import {allShopItems} from './allShopItems';
import {currentCategory} from './currentCategory';
import {currentlyHoveredItem} from './currentlyHoveredItem';
import {itemsInCart} from './itemsInCart';

export default combineReducers({
    allShopItems,
    currentCategory,
    currentlyHoveredItem,
    itemsInCart
})
