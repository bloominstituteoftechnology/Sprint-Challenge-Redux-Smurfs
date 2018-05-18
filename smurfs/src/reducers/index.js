import FETCHING_SMURFS from 'FETCHING_SMURFS';
import SMURFS_FETCHED from 'SMURFS_FETCHED';
import ADDING_SMURFS from 'ADDING_SMURFS';
import SMURFS_ADDED from 'SMURFS_ADDED';
import ERROR from 'ERROR';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  error: null
};

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

export default (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        fetchingSmurfs: false
      });
    case FETCHING_SMURFS:
      return Object.assign({}, state, { 
        fetchingSmurfs: true
       });
    case ERROR: 
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    case SMURFS_ADDED:
      return Object.assign({}, state, {
        addingSmurfs: false,
      });
    case ADDING_SMURFS:
      return Object.assign({}, state, {
        addingSmurfs: true,
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
