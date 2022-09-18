import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import userReducer from './reducers/userSlice';
import postReducer from './reducers/postSlice';
import loaderReducer from './reducers/loaderSlice';

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  post: postReducer,
  loader: loaderReducer
});

export default rootReducer;
