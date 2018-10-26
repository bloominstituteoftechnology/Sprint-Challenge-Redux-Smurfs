/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR, ADDING_SMURF, DELETING_SMURF } from '../actions';
import { combineReducers } from 'redux';
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
};

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURFS:
			return {
				...state,
				fetchingSmurfs: true
			};
		case FETCHED_SMURFS:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: [ ...state.smurfs, ...action.payload ]
			};
		case ERROR:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
			};
		case ADDING_SMURF:
			return {
				...state,
				fetchingState: false,
				smurfs: action.payload
			};
		case DELETING_SMURF:
			return {
				...state,
				fetchingState: false,
				deletingSmurf: true,
				smurfs: action.payload
			};
		default:
			return state;
	}
};

const AppState = combineReducers({
	smurfReducer
});

export default AppState;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
