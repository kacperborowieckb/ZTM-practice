import { combineReducers } from 'redux';
import { userReducer } from './user/user';

export const rootReducer = combineReducers({
  user: userReducer,
});
