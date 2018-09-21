/*
  Be sure to import in all of the action types from `../actions`
*/

import { ERROR, GETTING_SMURFS, SMURFS_RECEIVED, CREATE_SMURF, SMURF_CREATED } from '../actions/index.js';

//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
    case GETTING_SMURFS:
	return Object.assign({}, state, {
	    fetchingSmurfs: true
	});
    case SMURFS_RECEIVED:
	return Object.assign({}, state, {
	    fetchingSmurfs: false,
	    smurfs: action.payload,
	    error: null
	});
    case CREATE_SMURF:
	return Object.assign({}, state, {
	    addingSmurf: true
	});
    case SMURF_CREATED:
	return Object.assign({}, state, {
	    addingSmurf: false,
	    error: null
	});
    case ERROR:
	return Object.assign({}, state, {
	    fetchingSmurfs: false,
	    error: action.payload
	});
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
