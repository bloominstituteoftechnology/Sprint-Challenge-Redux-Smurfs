import * as actions from '../actions';

 const init = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
 };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state=init, action) => {
  switch(action.type) {
    case actions.FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case actions.FETCHED:
      return Object.assign({}, state, {smurfs: [...action.payload], fetchingSmurfs: false})
    case actions.ERROR:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state
  }
}
