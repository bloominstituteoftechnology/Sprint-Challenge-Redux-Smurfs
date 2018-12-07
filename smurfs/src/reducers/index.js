/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, SUCCESS, FAILURE, ADD_NEW_SMURF } from "../actions";

const initialState = {
	smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
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
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetchingSmurfs: true,
				smurfsFetched: false,
			};
		case SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				smurfsFetched: true,
				error: false,
				fetchingSmurfs: false,
			};
		case FAILURE:
			return {
				...state,
				error: action.payload,
				fetchingSmurfs: false,
				smurfsFetched: false,
			};
		case ADD_NEW_SMURF:
			return {
				...state,
				smurfs: action.payload,
				addingSmurfs: true,
			};

		default:
			return state;
	}
};

export default rootReducer;