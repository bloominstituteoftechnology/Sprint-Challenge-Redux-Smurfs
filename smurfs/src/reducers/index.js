/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURF, SMURF_FETCHED, FETCH_ERROR, ADDING_SMURF, SMURF_ADDED } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, {fetchingSmurfs:true});
    case SMURF_FETCHED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: "Error fetching smurfs"
      });
    case ADDING_SMURF:
      return {...state, addingSmurf: true };
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload };
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
