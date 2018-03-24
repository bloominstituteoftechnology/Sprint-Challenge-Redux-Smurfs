import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, ADD_SMURF } from '../actions';
import { UPDATE_SMURFS, DELETE_SMURF } from '../actions';
import { GETTING_SMURFS, ADDING_SMURFS, UPDATING_SMURFS, DELETING_SMURF } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false, 
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GETTING_SMURFS:
      return { ...state, fetchingSmurfs: true }

    case FETCH_SMURFS_ERROR:
      return { ...state, error: action.fetchSmurfsErrMsg}

    case FETCH_SMURFS_SUCCESS:
      return { ...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null };

    case ADDING_SMURFS:
      return { ...state, addingSmurf: true }

    case ADD_SMURF:
      return { ...state, smurfs: action.smurfs, addingSmurf: false, error: null };

    case UPDATING_SMURFS:
      return { ...state, updatingSmurf: true } 

    case UPDATE_SMURFS:
      return { ...state, smurfs: [action.smurfs], updatingSmurf: false, error: null };

    case DELETING_SMURF:
      return { ...state, deletingSmurfs: true }

    case DELETE_SMURF:
      return { ...state, smurfs: action.smurfs, deletingSmurfs: false, error: null };
      
    default:
      return state;
  }
}

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