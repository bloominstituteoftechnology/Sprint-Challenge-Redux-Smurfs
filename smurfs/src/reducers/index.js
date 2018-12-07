/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING_SMURFS,
  GET_SMURF_FAILURE,
  GET_SMURF_SUCCESS,
  ADDING_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDITING_SMURF,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  SMURF_SELECTED,
} from '../actions';

// Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  selectedSmurf: null,
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
    case ADDING_SMURF: {
      console.log('adding smurf');
      return {
        ...state,
        addingSmurf: true,
      };
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      };
    }
    case ADD_SMURF_FAILURE: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      };
    }
    case SMURF_SELECTED: {
      return {
        ...state,
        selectedSmurf: state.smurfs.find(s => s.name === action.payload),
      };
    }
    case EDITING_SMURF: {
      return {
        ...state,
        updatingSmurf: true,
      };
    }
    case EDIT_SMURF_SUCCESS: {
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
      };
    }
    case EDIT_SMURF_FAILURE: {
      return {
        ...state,
        updatingSmurf: false,
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
