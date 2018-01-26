/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FIND_SMURFS,
  SMURFS_FOUND,
  ERROR_FINDING_SMURFS,
  ADD_SMURF,
  SMURF_ADDED,
  ERROR_ADDING_SMURF,
  UPDATE_SMURF,
  SMURF_UPDATED,
  ERROR_UPDATING_SMURF,
  DELETE_SMURF,
  SMURF_DELETED,
  ERROR_DELETING_SMURF,
} from '../actions'
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
const initialState = {
  findSmurfs: false,
  smurfsFound: false,
  addSmurf: false,
  smurfAdded: false,
  updateSmurf: false,
  smurfUpdated: false,
  deleteSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null,
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_SMURFS:
      return { ...state, findSmurfs: true };
    case SMURFS_FOUND:
      return {
        ...state,
        findSmurfs: false,
        smurfsFound: true,
        smurfs: action.payload,
      };
    case ERROR_FINDING_SMURFS:
      return { ...state, error: action.payload };
    case ADD_SMURF:
      return { ...state, addSmurf: true };
    case SMURF_ADDED:
      return {
        ...state,
        smurfAdded: true,
        addSmurf: false,
        smurfs: action.payload,
      };
    case ERROR_ADDING_SMURF:
      return { ...state, error: action.payload };
    case UPDATE_SMURF:
      return { ...state, updateSmurf: true };
    case SMURF_UPDATED:
      return {
        ...state,
        updateSmurf: false,
        smurfUpdated: true,
        smurfs: action.payload,
      };
    case ERROR_UPDATING_SMURF:
      return { ...state, error: action.payload };
    case DELETE_SMURF:
      return { ...state, deleteSmurf: true };
    case SMURF_DELETED:
      return {
        ...state,
        deleteSmurf: false,
        smurfDeleted: true,
        smurfs: action.payload,
      };
    case ERROR_DELETING_SMURF:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};