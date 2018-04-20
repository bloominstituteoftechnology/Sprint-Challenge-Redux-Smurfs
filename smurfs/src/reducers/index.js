import {
	FETCHED_SMURFS,
	FETCHING_SMURFS,
	ERROR
} from "../actions/index";

/*
  Be sure to import in all of the action types from `../actions`
*/

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
  // adding: false,
  // updating: false,
  // deleting: false,
  error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_SMURFS:
        return Object.assign({}, state, {
          fetching: false,
          smurfs: [...action.payload]
        });
    case ERROR:
        return Object.assign({}, state, {
          pending: false,
          error: action.payload
        });
    default:
        return state;
  }
};

export default smurfReducer;