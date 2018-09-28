/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCHING_SMURFS, 
  FETCHED_SMURFS, 
  SAVING_SMURF, 
  SAVED_SMURF, 
  ERROR 
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   savingSmurf: false,
   smurfSaved: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        smurfsFetched: false
      };
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload
      };
    case SAVING_SMURF:
      return {
        ...state,
        savingSmurf: true,
        smurfSaved: false
      };
    case SAVED_SMURF:
      return {
        ...state,
        savingSmurf: false,
        smurfSaved: true,
        smurfs: action.payload
      };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        savingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfsReducer;