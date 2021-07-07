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
import {
	FETCHING_SMURFS,
	FETCHED_SMURFS,
	SMURF_FETCHING_ERROR,
	ADDING_SMURF,
	ADDED_SMURF,
	ADDING_SMURF_ERROR
} from "../actions";

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURFS:
			return { ...state, fetchingSmurfs: true };
		case FETCHED_SMURFS:
			return { ...state, fetchingSmurfs: false, smurfs: action.payload };
		case SMURF_FETCHING_ERROR:
			console.log(action.payload);
			return { ...state, fetchingSmurfs: false, error: action.payload };
		case ADDING_SMURF:
			return { ...state, addingSmurf: true };
		case ADDED_SMURF:
			return { ...state, addingSmurf: false, smurfs: action.payload };
		case ADDING_SMURF_ERROR:
			console.log(action.payload);
			return { ...state, addingSmurf: false, error: action.payload };
		default:
			return state;
	}
};
