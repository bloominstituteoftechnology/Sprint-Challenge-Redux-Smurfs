import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE,
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
      default:
        return state;
    }
  };