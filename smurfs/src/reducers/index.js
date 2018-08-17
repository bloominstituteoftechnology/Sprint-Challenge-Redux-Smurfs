/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCHING_SMURFS,
        SMURFS_FETCHED,
        ADDING_SMURF,
        SMURF_ADDED,
        UPDATING_SMURF,
        SMURF_UPDATED,
        DELETING_SMURF,
        SMURF_DELETED,
        ERROR       
       }
from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   updatingSmurf: false,
   smurfUpdated: false,
   deletingSmurf: false,
   smurfDeleted: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action)=> {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true});
    case SMURFS_FETCHED:
      return Object.assign({}, state, { smurfs: action.payload, fetchingSmurfs: false})
    case ADDING_SMURF:
      return Object.assign({}, state, {});
    case SMURF_ADDED:
      return Object.assign({}, state, {});
    case UPDATING_SMURF:
      return Object.assign({}, state, {});
    case SMURF_UPDATED:
      return Object.assign({}, state, {});
    case DELETING_SMURF:
      return Object.assign({}, state, {});
    case SMURF_DELETED:
      return Object.assign({}, state, {});
    case ERROR: 
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export default smurfReducer;