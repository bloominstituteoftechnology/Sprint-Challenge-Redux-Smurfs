/*
  Be sure to import in all of the action types from `../actions`
*/
import {GETTING_SMURFS, GET_SMURF_FAILURE, GET_SMURF_SUCCESS} from '../actions';

// Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

export default (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case GETTING_SMURFS: {
      console.log('reducer getting');
      return {
        ...state,
        fetchingSmurfs: true,
      };
    }
    case GET_SMURF_SUCCESS: {
      console.log('success!');
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      };
    }
    case GET_SMURF_FAILURE: {
      console.log('noooo', action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

/*
 *
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
