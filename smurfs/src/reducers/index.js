import * as actionTypes from '../actions';

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  savingSmurfs: false,
  smurfsSaved: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  smurfs: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true};
    case actionTypes.SMURFS_FETCHED:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false, smurfsFetched: true};
    case actionTypes.ERROR:
      return { ...state, 
        fetchingSmurfs: false,
        smurfsFetched: false,
        savingSmurfs: false,
        smurfsSaved: false,
        updatingSmurf: false,
        deletingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
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
   error: true
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
