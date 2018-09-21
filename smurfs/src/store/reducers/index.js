// import { combineReducers } from 'redux';
// import { smurfsReducer } from './smurfsReducer';

// export default combineReducers({
//   smurfsReducer
// });

/* Be sure to import in all of the action types from `../actions` */
import { 
  
  FETCHING_SMURF, 
  SMURF_FETCH_SUCCESS, 
  SMURF_FETCH_ERROR,

  ADD_SMURF_START,
  ADD_SMURF_COMPLETE,
  ADD_SMURF_FAILURE
 } from '../actions';

/* Your initial/default state for this project could *Although does not have to* look a lot like this */

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false
  //  deletingSmurf: false
  //  error: null
  error: ""
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
    case FETCHING_SMURF:
    return Object.assign({}, state, {fetchingSmurfs: true}); //if we are fetching simply trigger the boolean.
    case SMURF_FETCH_SUCCESS:
      return Object.assign({}, state, { 
        smurfs: [...state.smurfs, ...action.payload], //if our promise was successful, build out the chars array.
      fetchingSmurfs: false //also, set our boolean to false, because we're no longer fetching
      });
    case SMURF_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false, //we're also no longer fetching here so set the boolean to false
        error: "Error occured fetching Smurfs" // now we're getting an error back, set the error message
      });
    case ADD_SMURF_START:
      return { ...state, addingSmurf: true };
    case ADD_SMURF_COMPLETE:
      return { ...state, addingSmurf: false, smurfs: action.payload};
    case ADD_SMURF_FAILURE:
      console.log(action.payload);
      return { ...state, addingSmurf: false, error: action.payload};
    default:
      return state;
  }
};