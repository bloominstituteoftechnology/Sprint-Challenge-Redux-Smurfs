/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_DATA,
  FETCHED_DATA,
  FETCH_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_COMPLETE,
  ADD_SMURF_ERROR,
  DELETING_SMURF,
  DELETED_SMURF,
  DELETE_ERROR,
  EDITING_SMURF,
  EDITED_SMURF,
  EDIT_ERROR,
} from '../actions';

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
  deletingSmurf: false,
  editingSmurf: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCHED_DATA:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: 'Error fetching data',
      };
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
      };
    case ADD_SMURF_COMPLETE:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: 'Add smurf error',
      };
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      };
    case DELETED_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
      };
    case DELETE_ERROR:
      return {
        ...state,
        deletingSmurf: false,
        error: 'Delete error',
      };
    case EDITING_SMURF:
      return {
        ...state,
        editingSmurf: true,
      };
    case EDITED_SMURF:
      return {
        ...state,
        editingSmurf: false,
        smurfs: action.payload,
      };
    case EDIT_ERROR:
      return {
        ...state,
        editingSmurf: false,
        error: 'editing error',
      };
    default:
      return state;
  }
};
