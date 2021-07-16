import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers/productReducer';
import { asyncReducer } from './reducers/asyncReducer';
import { cartReducer } from './reducers/cartReducer';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
  product: productReducer,
  async: asyncReducer,
  cart: cartReducer,
  user: userReducer,
});

const middleware = [thunk];

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));

const inititalState = {
  user: {
    userInfo: userInfoFromLocalStorage,
  },
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
