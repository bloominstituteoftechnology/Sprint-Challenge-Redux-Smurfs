import { combineReducers } from 'redux';
import addSmurfReducer from './addSmurfReducer';
import getSmurfsReducer from './getSmurfsReducer';
import deleteSmurfReducer from './deleteSmurfReducer';

export default combineReducers({
  smurfsReducer: getSmurfsReducer,
  addSmurf: addSmurfReducer,
  deleteSmurf: deleteSmurfReducer
});
