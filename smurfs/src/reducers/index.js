import { combineReducers } from 'redux';

import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';

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

const initialSmurfsState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

const smurfReducer = (state = initialSmurfsState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        doggos: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default combineReducers({
  smurfReducer
});


import {
  ADD_TODO,
  FETCH_DOGGOS_START,
  FETCH_DOGGOS_SUCCESS,
  FETCH_DOGGOS_FAILURE
} from '../actions';




