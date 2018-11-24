/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHED, FETCHING, ERROR, ADDED, ADDING } from '../actions';

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return { ...state, fetchingSmurfs: true };
		case FETCHED:
			return Object.assign({}, state, {
				smurfs: action.payload,
				fetchingSmurfs: false,
				error: null
			});
		case ERROR:
			return { ...state, fetchingSmurfs: false, error: action.errorMessage };
		case ADDING:
			return { ...state, addingSmurf: true };
		case ADDED:
			console.log(action.payload);
			return {
				...state,
				smurfs: action.payload,
				addingSmurf: false,
				error: null
			};
		default:
			return state;
	}
};

export default RootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
