/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, FETCHED_SMURFS, ADD_SMURF, ADDED_SMURF, ERROR} from "../actions";



 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    
    case FETCH_SMURFS:
    return {
      ...state, fetchingSmurfs: true
    };


    case FETCHED_SMURFS:
     console.log("action", action.payload);
    return {
      ...state, fetchingSmurfs: false, smurfs: action.payload
    };

    case ADD_SMURF: 
    return {
      ...state, addingSmurf: true
    };

    case ADDED_SMURF: 
    return {
      ...state, addingSmurf: false, smurfs: action.payload
    };

    case ERROR: 
    return {
      ...state, addingSmurf: false, error: action.payload
    };

    default:
    return state
  }
};

