import {FETCHING, SUCCESS, FAILURE, ADD_SMURF, DELETE_SMURF, UPDATE_SMURF} from '../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export default (previousState = initialState, action) => {
  switch(action.type) {
    case FETCHING: 
      return Object.assign({}, previousState, 
        {fetchingSmurfs: true, addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: null});

    case SUCCESS:
      return Object.assign({}, previousState, 
        {smurfs: action.payload, fetchingSmurfs: false, addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: null});

    case FAILURE: 
      return Object.assign({}, previousState, 
        {fetchingSmurfs: false, addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: action.payload});

    case ADD_SMURF:
      return Object.assign({}, previousState, 
        {fetchingSmurfs: true, addingSmurf: true, updatingSmurf: false, deletingSmurf: false, error: null});
    
    case DELETE_SMURF:
      return Object.assign({}, previousState,
        {fetchingSmurfs: true, addingSmurf: false, updatingSmurf: false, deletingSmurf: true, error: null});

    case UPDATE_SMURF:
      return Object.assign({}, previousState,
        {fetchingSmurfs: true, addingSmurf: false, updatingSmurf: true, deletingSmurf: false, error: null});

    default: 
      return previousState;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
