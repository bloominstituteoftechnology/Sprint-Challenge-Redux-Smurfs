/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  DELETING_SMURF,
  SMURF_DELETED,
  ERROR
} from '../actions';
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

const  initialState ={
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error:null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  // console.log('action type:', action.type)
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case SMURFS_FETCHED:
      return {...state, fetchingSmurfs: false, smurfs: action.payload};
    case ADDING_SMURF:
      return {...state, addingSmurf: true};
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload};
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case SMURF_DELETED:
      return { ...state, deletingSmurf: false, smurfs: action.payload};
    case ERROR:
      return {...state, addingSmurf: false, error: action.payload};
    default:
      return state;
  }
}

