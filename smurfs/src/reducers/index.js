/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_DATA, FETCHED_DATA, FETCH_ERROR } from '../actions';

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
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCHED_DATA:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: 'Error fetching data',
      };
    default:
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
