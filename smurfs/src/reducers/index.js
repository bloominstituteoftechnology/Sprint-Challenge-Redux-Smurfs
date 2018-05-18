/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, GOT_SMURFS, ERROR} from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   gotSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case  FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true});
    case GOT_SMURFS:
      return Object.assign({}, state, {smurfs: action.payload, fetchingSmurfs: false, gotSmurfs:true });
    case ERROR: 
      return Object.assign({}, state, {gotSmurfs: false, fetchingSmurfs: false, error: action.payload });
    default:
      return state;
  }
}