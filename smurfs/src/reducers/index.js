/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
	GETTING_SMURFS,
	GOT_SMURFS,
	GET_SMURFS_ERROR,
	ADDING_SMURF,
	ADDED_SMURF,
	ADD_SMURF_ERROR,
	DELETING_SMURF,
	DELETED_SMURF,
	DELETE_SMURF_ERROR,
	UPDATING_SMURF,
	UPDATED_SMURF,
	UPDATE_SMURF_ERROR
} from '../actions';

const initialState = {
	smurfs: [],
	gettingSmurfs: false,
	addingSmurf: false,
	deletingSmurf: false,
	updatingSmurf: false,
	error: null
};

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_SMURFS:
			return { ...state, gettingSmurfs: true };

		case GOT_SMURFS:
			return {
				...state,
				smurfs: action.payload,
				gettingSmurfs: false
			};

		case GET_SMURFS_ERROR:
			return {
				...state,
				gettingSmurfs: false,
				error: `${action.payload}`
			};

		case ADDING_SMURF:
			return { ...state, addingSmurf: true };

		case ADDED_SMURF:
			return {
				...state,
				smurfs: action.payload,
				addingSmurf: false
			};

		case ADD_SMURF_ERROR:
			return {
				...state,
				addingSmurf: false,
				error: `${action.payload}`
			};

		case DELETING_SMURF:
			return { ...state, deletingSmurf: true };

		case DELETED_SMURF:
			return {
				...state,
				smurfs: action.payload,
				deletingSmurf: false
			};

		case DELETE_SMURF_ERROR:
			return {
				...state,
				deletingSmurf: false,
				error: `${action.payload}`
			};

		case UPDATING_SMURF:
			return { ...state, updatingSmurf: true };

		case UPDATED_SMURF:
			return {
				...state,
				smurfs: action.payload,
				updatingSmurf: false
			};

		case UPDATE_SMURF_ERROR:
			return {
				...state,
				updatingSmurf: false,
				error: `${action.payload}`
			};

		default:
			return state;
	}
};

export default smurfReducer;
