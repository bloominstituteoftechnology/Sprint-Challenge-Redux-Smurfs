/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_LOADING,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
  addingSmurf: false,
  deletingSmurf: false,
  updatingSmurf: false,
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
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
    case FETCH_SMURFS_LOADING:
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        deletingSmurf: false
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfsReducer;
