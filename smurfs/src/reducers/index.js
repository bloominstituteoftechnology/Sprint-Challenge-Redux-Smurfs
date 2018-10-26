/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE,
  ADD_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE
} from '../actions';

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
export const smurfReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_SMURFS:
      return {...state, fetchingSmurfs: true};
    case GET_SMURFS_SUCCESS:
      return {...state, smurfs: action.payload, fetchingSmurfs: false};
    case GET_SMURFS_FAILURE:
      return {...state, error: action.payload, fetchingSmurfs: false};

    case ADD_SMURFS:
      return {...state, addingSmurf: true};
    case ADD_SMURFS_SUCCESS:
      return {...state, smurfs: action.payload, addingSmurf: false};
    case ADD_SMURFS_FAILURE:
      return {...state, error: action.payload, addingSmurfs: false};

    default:
      return state;
  }
};
