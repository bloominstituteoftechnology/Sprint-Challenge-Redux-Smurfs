import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';
import { singleSmurfReducer } from './singleSmurfReducer';

export default combineReducers({
  smurfsReducer,
  singleSmurfReducer
});
