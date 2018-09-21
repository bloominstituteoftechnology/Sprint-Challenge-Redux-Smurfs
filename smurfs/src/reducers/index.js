/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURFS, ADDED_SMURFS, UPDATING_SMURFS, UPDATED_SMURFS, DELETING_SMURFS, DELETED_SMURFS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
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

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    default:
      return state;
  }
}