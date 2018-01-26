/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actions from '../actions';
import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';
import { smurfReducer } from './smurfReducer';

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: true
 }
*/

export default combineReducers({
  smurfsReducer,
  smurfReducer
});

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`. */
