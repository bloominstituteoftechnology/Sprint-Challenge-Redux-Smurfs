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
   error: true
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import * as actionType from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    // Fetch 
    case actionType.FETCHING_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true
    };

    // Add
    case actionType.ADDING_SMURF:
      return {
        ...state,
        smurfs: action.paylsload, 
        addingSmurf: false
      };
 
      // Update
      case actionType.UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };

      case actionType.UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false
      };

      // Delete
      case actionType.DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      };

      case actionType.DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
      };

      // Error
      case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;