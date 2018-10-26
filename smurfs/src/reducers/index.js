import {
  GETTING_SMURF,
  GETTING_SMURF_SUCCESS,
  GETTING_SMURF_FAIL,
  ADDING_SMURF,
  ADD_SMURF,
  DELETING_SMURF,
  DELETE_SMURF,
  ERROR
} from '../actions';


const initialState =
{
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
  deletingSmurf: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURF:
      return {
        ...state,
        fetchingSmurfs: true,
      }

    case GETTING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      }

    case GETTING_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      }

    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      }

    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      }

    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }

    case ERROR:
      return {
        ...state,
        addingSmurf: false,
        fetchingSmurfs: false,
        error: action.payload
      }

    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
