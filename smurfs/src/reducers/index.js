/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURF, FETCH_SUCCESS, ADD_SMURF, FETCH_ERROR } from '../actions';
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

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	success: false,
	error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURF:
			return { ...state, fetchingSmurfs: true };
		case FETCH_SUCCESS:
			return { ...state, fetchingSmurfs: false, smurfs: action.payload };
		case ADD_SMURF:
			return { ...state, addingSmurf: true };
		case FETCH_ERROR:
			return {
				...state,
				fetchingSmurfs: false,
				error: 'Gargamel got the smurfs',
			};
		default:
			return state;
	}
};

export default smurfsReducer;
