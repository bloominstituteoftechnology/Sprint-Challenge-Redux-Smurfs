/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING, GETTING_SUCCESS, GETTING_ERROR,
  POSTING, POSTING_SUCCESS, POSTING_ERROR
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
    case POSTING:
      return {...state, addingSmurf: true };
    case POSTING_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      }
    case POSTING_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default smurfsReducer;