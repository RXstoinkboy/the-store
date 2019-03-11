import {combineReducers} from 'redux';
import {allShopItems} from './allShopItems';
import {currentCategory} from './currentCategory';
import {currentlyHoveredItem} from './currentlyHoveredItem';

export default combineReducers({
    allShopItems,
    currentCategory,
    currentlyHoveredItem
})
