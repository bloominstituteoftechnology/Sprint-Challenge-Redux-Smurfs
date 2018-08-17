/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING, FETCHED, ADDING, ADDED, ERROR } from '../actions';


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
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchedSmurfs: true,
        fetchingSmurfs: false,
        smurfs: action.payload
      });
    case ADDING:
      return Object.assign({}, state, {
        addingSmurf: true
      });
    case ADDED:
      return Object.assign({}, state, {
        addedSmurf: true,
        addingSmurf: false,
        smurfs: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        addingSmurf: false,
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default smurfReducer;