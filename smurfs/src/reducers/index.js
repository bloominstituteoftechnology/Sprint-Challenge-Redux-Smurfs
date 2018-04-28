import { FETCHING, FETCHED, ERROR, ADDED, DELETED, UPDATED } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}


export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingSmurfs: true}
    case FETCHED:
      return {...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: state.smurfs.concat(action.smurfs)}
    case ERROR:
      return {...state, fetchingSmurfs: false, error: action.error}
    case ADDED:
      return {...state, smurfs: [...action.smurfs]}
    case DELETED:
      return {...state, smurfs: [...action.smurfs]}
    case UPDATED:
      return {...state, smurfs: [...action.smurfs]}
    default: 
      return state;
    }
}

export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
