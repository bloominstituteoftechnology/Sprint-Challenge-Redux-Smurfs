/*
	Be sure to import in all of the action types from `../actions`
*/
// Actions
import {
	GETTING_SMURFS,
	GETTING_SMURFS_COMPLETE,
	GETTING_SMURFS_ERROR,

	POSTING_SMURF,
	POSTING_SMURF_COMPLETE,
	POSTING_SMURF_ERROR,

	PUTTING_SMURF,
	PUTTING_SMURF_COMPLETE,
	PUTTING_SMURF_ERROR,
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
	getSmurfsMsg: null,
	getSmurfsErrorMsg: null,
	postSmurfErrorMsg: null,
	putSmurfErrorMsg: null,
};

const smurfReducer = (state = initialState, action) => {
	switch(action.type) {
		// GET
		case GETTING_SMURFS: {
			return { 
				...state, 
				smurfs: [ ...state.smurfs ], 
				getSmurfsMsg: 'Getting smurfs...', 
				getSmurfsErrorMsg: null
			};
		}
		case GETTING_SMURFS_COMPLETE: {
			return { 
				...state, 
				smurfs: action.payload, 
				getSmurfsMsg: null,
				getSmurfsErrorMsg: null 
			};
		}
		case GETTING_SMURFS_ERROR: {
			return { 
				...state, 
				smurfs: [ ...state.smurfs ], 
				getSmurfsMsg: null,
				getSmurfsErrorMsg: action.payload + '' ,
			};
		}

		// POST
		case POSTING_SMURF: {
			return state;
		}
		case POSTING_SMURF_COMPLETE: {
			return { 
				...state, 
				smurfs: action.payload,
			};
		}
		case POSTING_SMURF_ERROR: {
			return {
				...state, 
				smurfs: [ ...state.smurfs ], 
				postSmurfErrorMsg: action.payload + '',
			};
		}

		// PUT
		case PUTTING_SMURF: {
			return state;
		}
		case PUTTING_SMURF_COMPLETE: {
			return { 
				...state,
				smurfs: action.payload,
			};
		}
		case PUTTING_SMURF_ERROR: {
			return {
				...state, 
				smurfs: [ ...state.smurfs ], 
				putSmurfErrorMsg: action.payload + '',
			};
		}

		// DEFAULT
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
