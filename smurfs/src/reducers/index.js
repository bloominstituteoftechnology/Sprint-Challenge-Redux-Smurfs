/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING, GETTING_SUCCESS, GETTING_ERROR,
  PUTTING, PUTTING_ERROR
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
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

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return { ...state, fetchingSmurfs: true };
    case GETTING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case GETTING_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case PUTTING:
      return {
        ...state,
        addingSmurf: true
      };
    case PUTTING_ERROR:
      return {
        ...state,
        savingFriends: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default smurfsReducer;