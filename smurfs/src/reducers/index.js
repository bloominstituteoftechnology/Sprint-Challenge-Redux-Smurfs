import { combineReducers } from 'redux';
import SmurfReducer from './SmurfsReducers';
import {toggleReducer} from './ToggleReducers';

export const rootReducer = combineReducers({
  smurfs: SmurfReducer,
  showForm: toggleReducer
})