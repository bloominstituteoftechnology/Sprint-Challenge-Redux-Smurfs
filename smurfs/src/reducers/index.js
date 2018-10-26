/*
  Be sure to import in all of the action types from `../actions`
*/

import { SMURF_FETCH, SMURF_FETCHED, SMURF_ERROR } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (stateo = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCH:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SMURF_FETCHED:
      return Object.assign({}, state, {
        smurfs: action.data,
        fetchingSmurfs: false,
        error: 'No smurfs!'
      });
    default:
      return state;
  }
};

export default smurfReducer;
