import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  UPDATE_SMURFS_START,
  UPDATE_SMURFS_SUCCESS,
  UPDATE_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialSmurfsState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  selectedSmurf: null,
};

const smurfReducer = (state = initialSmurfsState, action) => {
  switch (action.type) {
    case ADD_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: true,
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      };
      case UPDATE_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        updatingSmurf: true,
      };
    case UPDATE_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        updatingSmurf: false,
        smurfs: action.payload
      };
    case UPDATE_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        updatingSmurf: false,
        error: action.payload
      };
      case DELETE_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        deletingSmurf: true,
      };
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case DELETE_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        deletingSmurf: false,
        error: action.payload
      };
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
      case FETCH_SMURFS_FAILURE:
       return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
       }
    default:
      return state;
  }
}

export default smurfReducer;






