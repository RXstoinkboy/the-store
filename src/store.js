import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index'

export const history = createHistory()

// const initialState = {}

// define enhancers 
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

// define storage item with data retrived from storage item (local of session - still deciding) 
// use it only if local storage item is actually existing
const locallyStoredState = localStorage.getItem('the-store_inCart') ? JSON.parse(localStorage.getItem('the-store_inCart')) : {};

// combine all enhancers into one item
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
)

// create store with initial state defined as rood reducers
// take advandage of local storage to hydrate store with preserved data from previous session
// apply all other enhncers (middleware)
const store = createStore(
    connectRouter(history)(rootReducer),
    locallyStoredState,
    composedEnhancers,
)

// listen to all actions taken and every time save current state of the store in local/session storage
store.subscribe(()=>{
    console.log(store.getState());
    localStorage.setItem('the-store_inCart', JSON.stringify(store.getState()))
});

export default store;