/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADDING_SMURF,
  SMURF_ADDED,
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  SMURFS_FETCHED_FAILURE
} from "../actions";

const initialState= {
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


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case SMURFS_FETCHED_FAILURE :
      return { ...state,fetchingSmurfs: false, error: action.payload };
    case ADDING_SMURF:
      return {...state, addingSmurf:true}
    case SMURF_ADDED:
      return{...state, addingSmurf:false, smurfs:[...state.smurfs, ...action.payload]}
    default:
      return state;
  }
};
export default rootReducer;