import { 
  FETCHING_SMURFS, 
  SUCCESS,
  ERROR,
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

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
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => { // Export default an anonymous function taking state as initialState and action.
  switch (action.type) { // Switch statement.
    case FETCHING_SMURFS: // Handles type: Fetching Smurfs.
      return Object.assign({}, state, { fetchingSmurfs: true }); // // Return our Object of assign, new object extending all properties of state except return fetchingSmurfs as a boolean.
    case SUCCESS:
      return Object.assign({}, state, {
        smurfs: action.payload, // Overrides the array.
        fetchingSmurfs: false, // Sets the state back to false after fetching.
        updatingSmurf: false,
        deletingSmurf: false,
        addingSmurf: false,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;  
  }
};
