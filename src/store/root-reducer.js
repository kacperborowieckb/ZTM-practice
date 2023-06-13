import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category';
import { userReducer } from './user/user';
import { cartReducer } from './cart/cart';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
