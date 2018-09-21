/*
	Be sure to import in all of the action types from `../actions`
*/
// Actions
import {
	GETTING_SMURFS,
	GETTING_SMURFS_COMPLETE,
	GETTING_SMURFS_ERROR,
} from '../actions';
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
};

const smurfReducer = (state = initialState, action) => {
	switch(action.type) {
		case GETTING_SMURFS: {
			return state;
		}
		case GETTING_SMURFS_COMPLETE: {
			return state;
		}
		case GETTING_SMURFS_ERROR: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default smurfReducer;
/*
	You'll only need one smurf reducer for this project.
	Feel free to export it as a default and import as rootReducer. 
	This will guard your namespacing issues.
	There is no need for 'combineReducers' in this project.
	Components can then read your store as, `state` and not `state.fooReducer`.
*/
