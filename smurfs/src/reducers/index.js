/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';
// import { singleSmurfReducer } from './singleSmurfReducer';

export default combineReducers({
  smurfsReducer,
  // singleSmurfReducer
})