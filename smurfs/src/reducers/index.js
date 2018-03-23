import {
  GET_SMURFS, 
  GETTING_SMURFS, 
  CREATE_SMURFS, 
  CREATING_SMURFS, 
  UPDATE_SMURF,
  UPDATING_SMURFS,  
  DELETE_SMURF,
  DELETING_SMURF,
  ERROR,
} from '../actions';

const initialState = {
  smurfs: [], 
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETTING_SMURFS:
          return {...state, fetchingSmurfs: true };
      case GET_SMURFS:
          return {...state, addingSmurf: false };
      case ERROR:
          return {...state,
                  fetchingSmurfs: false,
                  addingSmurf: false, 
                  deletingSmurfs: false,
                  updatingSmurf: false,
                  error: action.payload,
                };
            default:
                return state;
    }
};

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
