/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURFS_RECEIVED, SMURF_ADDED, ERROR } from '../actions';

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
    case SMURFS_RECEIVED:
      return {...state, smurfs: action.payload}
    case SMURF_ADDED:
      return {...state}
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  };
};

export default smurfReducer;