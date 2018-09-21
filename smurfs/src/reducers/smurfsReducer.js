import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE,

    ADD_SMURFS_START,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_FAILURE,

    REMOVE_SMURFS_START,
    REMOVE_SMURFS_SUCCESS,
    REMOVE_SMURFS_FAILURE,
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
  };
  
  export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCHING_SMURFS_START:
        return { ...state, fetchingSmurfs: true };
      case FETCHING_SMURFS_SUCCESS:
        return { ...state, fetchingSmurfs: false, smurfs: action.payload };
      case FETCHING_SMURFS_FAILURE:
        return { ...state, fetchingSmurfs: false, error: action.payload };
      case ADD_SMURFS_START:
        return { ...state, addingSmurf: true}
      case ADD_SMURFS_SUCCESS:
        return { ...state, addingSmurf: false, smurfs: action.payload };
      case ADD_SMURFS_FAILURE:
        return { ...state, addingSmurf: false, error: action.payload };
      case REMOVE_SMURFS_START:
        return { ...state, deletingSmurf: true}
      case REMOVE_SMURFS_SUCCESS:
        return { ...state, deletingSmurf: false, smurfs: action.payload };
      case REMOVE_SMURFS_FAILURE:
        return { ...state, deletingSmurf: false, error: action.payload };
      default:
        return state;
    }
  };