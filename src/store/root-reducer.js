import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category';
import { userReducer } from './user/user';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
