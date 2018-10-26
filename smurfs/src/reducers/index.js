/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCH_SMURF, SMURF_FAILURE, ADDING_SMURF, ADD_SMURF } from '../actions';

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

 const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case FETCH_SMURF:
      return {...state, smurfs: [...state.smurfs, ...action.payload], fetchingSmurfs: false}
    case ADDING_SMURF:
      return {...state, addingSmurf: true}
    case ADD_SMURF:
      return {...state, smurfs: [...state.smurfs, ...action.payload], addingSmurf: false}
    case SMURF_FAILURE:
      return {...state, fetchingSmurfs: false, error: action.payload}
    default:
      return state;

  }
    
}

export default smurfReducer;