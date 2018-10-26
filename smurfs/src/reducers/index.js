/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_DATA,
  DATA_FETCHED,
  FETCH_ERROR,
  INITIALIZE_SMURF_ADD,
  COMPLETE_SMURF_ADD,
  ADD_SMURF_ERROR,
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
const initialState = {
  smurfs: [],
  fetchingData: false,
  dataFetched: false,
  addingSmurf: false,
  error: '',
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingData: false,
        dataFetched: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    case INITIALIZE_SMURF_ADD:
      return {
        ...state,
        addingSmurf: true,
      };
    case COMPLETE_SMURF_ADD:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        error: 'Error adding smurf',
        addingSmurf: false,
      };
    default:
      return state;
  }
};