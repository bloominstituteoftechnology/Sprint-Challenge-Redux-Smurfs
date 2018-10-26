import { FETCHING, FETCHED, ADDED, UPDATING, UPDATED, DELETED, ERROR } from '../actions';

const initialState = {
	fetching: false,
	editingId: null,
    smurfs: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetching: true };
        case FETCHED:
            return {
                ...state,
                fetching: false,
                smurfs: [...state.smurfs, ...action.payload]
            };
        case ADDED:
            return {
                ...state,
                smurfs: [ ...action.payload]
			};
		case UPDATING:
			return { 
				...state, 
				editingId: action.payload
			};
        case UPDATED:
            return {
				...state,
				editingId: null,
                smurfs: [ ...action.payload]
            };
        case DELETED:
            return {
                ...state,
                smurfs: [ ...action.payload]
            };
        case ERROR:
            return { 
                ...state, 
				fetching: false,
				editingId: null,
                error: action.payload 
            };
        default:
            return state;
    }
};
/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
