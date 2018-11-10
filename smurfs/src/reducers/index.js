/*
  Be sure to import in all of the action types from `../actions`
*/


import {combineReducers} from 'redux';
import {smurfReducer} from './smurfReducer'

export default combineReducers({
  smurfReducer
})




/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
