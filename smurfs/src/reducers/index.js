/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHED, FETCHING, ERROR, ADD_SMURF, ADDED_SMURF, DELETE_SMURF, DELETING } from "../actions";

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

const initialState = {
	smurfs: [],
	fetching: false,
	adding: false,
	error: null,
	deletingSmurfs: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {...state, fetching: true};
    case FETCHED:
			return {...state, smurfs: action.smurfs, fetching: false, error: null};
    case ERROR:
      return {...state, error: action.errorMessage};
		case ADD_SMURF:
			return {...state, adding: true};
		case ADDED_SMURF:
			return {...state, adding: false, added: true, smurfs: action.smurfs};
		case DELETING:
      return { ...state, deletingSmurfs: true};
    case DELETE_SMURF:
			return { ...state, smurfs: state.smurfs.filter(smurf => action.id !== smurf.id), deletingSmurfs: false, error: null};
		default:
			return state;
	}
};
