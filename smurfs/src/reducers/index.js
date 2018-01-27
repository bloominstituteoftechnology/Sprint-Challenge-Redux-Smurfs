/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING_SMURFS, SMURFS_RECEIVED,
  ADDING_SMURF, SMURF_ADDED,
  DELETING_SMURF, SMURF_DELETED,
  ERROR,
} from '../actions';

/*
 Your initial/default state for this project could look a lot like this
*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true,
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return {...state, fetchingSmurfs: true}
    case SMURFS_RECEIVED:
      return {...state, smurfs: action.payload, fetchingSmurfs: false}
    case ADDING_SMURF:
      return {...state, addingSmurf: true}
    case SMURF_ADDED:
      return {...state, smurfs: action.payload, addingSmurf: false}
    case DELETING_SMURF:
      return {...state, deletingSmurf: true}
    case SMURF_DELETED:
      return {...state, deletingSmurf: false}  // this server's delete does not return anything
    case ERROR:
      return {...state, error: action.payload, fetchingSmurfs: false, addingSmurf: false, deletingSmurf: false}
    default:
      return state;
  };
};

export default smurfReducer;