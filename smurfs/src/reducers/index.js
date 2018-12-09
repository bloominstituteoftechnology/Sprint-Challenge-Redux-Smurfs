import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE

} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initState, action) => {
  switch (action.type){
    case FETCH_SMURFS_START:
      return {
        ... state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ... state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
      };
     case FETCH_SMURFS_FAILURE:
      return {
        ... state,
        fetchingSmurfs: false,
        error: action.payload
      };


      case ADD_SMURF_START:
      return {
        ... state,
        fetchingSmurfs: true,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ... state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false
      };
     case ADD_SMURF_FAILURE:
      return {
        ... state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      };


    default: 
      return state;
  }
};

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
