/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { PENDING, SUCCESS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  pending: false,
  success: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case PENDING:
      return { ...state, pending: true };
    case SUCCESS:
      return { ...state, smurfs: action.payload };
    case ERROR:
      return state;
    default:
      return state;
  }
};