import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  SMURF_ERROR,
  CREATE_SMURF,
  SMURF_CREATED,
  CREATION_ERROR
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

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true});

    case SMURFS_FETCHED:
      return Object.assign({}, state, {fetchingSmurfs: false, smurfs: action.payload, error: null});

    case SMURF_ERROR:
      return Object.assign({}, state, {fetchingSmurfs: false, error: action.payload });

    case CREATE_SMURF:
      return Object.assign({}, state, {addingSmurf: true });

    case SMURF_CREATED:
      return Object.assign({}, state, {addingSmurf: false, error: null});
      
    case CREATION_ERROR:
      return Object.assign({}, state, {addingSmurf: false, error: action.payload});

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
