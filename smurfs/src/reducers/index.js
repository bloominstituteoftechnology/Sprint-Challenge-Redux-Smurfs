import { PENDING, GET_SMURFS, ADD_SMURF, DELETE_SMURF, ERROR } from '../actions';

const startingState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}

const reducer = (state = startingState, action) => {
  switch (action.type) {
    case PENDING:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case GET_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: false, smurfs: state.smurfs.concat(action.smurfs) });
    case ADD_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case DELETE_SMURF:
      return Object.assign({}, state, { deletingSmurfs: true, smurfs: action.smurfs })
    case ERROR:
      return Object.assign({}, state, { fetchingSmurfs: false, error: action.error });
    default: 
      return state;
  }
}

export default reducer;

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
