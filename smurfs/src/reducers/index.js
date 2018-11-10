import { FETCHING, FETCHING_SMURFS, ADDING_SMURF, DELETING_SMURF, UPDATING_SMURF, ERROR } from '../actions';
/*
	Be sure to import in all of the action types from `../actions`
*/

const initialState = {
	smurfs: [],
	fetching: false,
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null,
}

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return Object.assign({}, state, {fetching: true });
		
		case FETCHING_SMURFS:
			return Object.assign({}, state, { smurfs: action.payload, fetching: false });

		case ADDING_SMURF:
			return Object.assign({}, state, { addingSmurf: true });

		case DELETING_SMURF:
			return Object.assign({}, state, { deletingSmurf: true });

		case UPDATING_SMURF:
			return Object.assign({}, state, { updatingSmurf: true });

		case ERROR:
			return Object.assign({}, state, { error: action.payload, fetching: false });

		default:
			return state;
	}
};

/*
	You'll only need one smurf reducer for this project.
	Feel free to export it as a default and import as rootReducer. 
	This will guard your namespacing issues.
	There is no need for 'combineReducers' in this project.
	Components can then read your store as, `state` and not `state.fooReducer`.
*/
