/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_REQUEST,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURFS_REQUEST,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DELETE_SMURFS_REQUEST,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE,
  UPDATE_SMURFS_REQUEST,
  UPDATE_FORM
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 // Yeah, that's fine, I'll use that!
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  //addingSmurf: false    -> I don't use the use of any of these. I mean, they only confuse the logic until we get to updating.
  //updatingSmurf: false
  //deletingSmurf: false
  error: null,
  currentSmurf: null
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
      // without this default state, the app crashes! that's a little dumb!
      case ADD_SMURFS_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true
      };
      case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
      case DELETE_SMURFS_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true
      };
      case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case DELETE_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case UPDATE_SMURFS_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true,
        currentSmurf: null
      };
    
    case UPDATE_FORM:
    return {
      ...state,
      currentSmurf: action.payload
    };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default smurfsReducer;
