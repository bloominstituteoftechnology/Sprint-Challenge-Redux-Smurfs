import  { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, ADD_SMURF, ADD_SMURF_ERR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false, 
  error: null
}

export default (smurfs = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_SUCCESS:
      return action.smurfs;
    case FETCH_SMURFS_ERROR:
      return action.fetchSmurfsErrMsg;
    case ADD_SMURF:
      return action.smufs;
    case ADD_SMURF_ERR:
      return action.addSmurfErrMsg;
    default:
      return smurfs;
  }
}

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/