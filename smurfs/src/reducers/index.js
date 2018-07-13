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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {FETCHING, FETCHED, SAVING, SAVED, ERROR, UPDATED, UPDATING, DELETED, DELETING} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  deletingSmurf: false,
  smurfDeleted: false,
  updatingSmurf: false,
  smurfUpdated: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case FETCHED:
      return Object.assign({}, state, {fetchingSmurfs: false, smurfsFetched: true, smurfs: action.payload})
    case ERROR:
      return Object.assign({}, state, {fetchingSmurfs: false, error: action.payload})
    case SAVING:
      return Object.assign({}, state, {addingSmurf: true})
    case SAVED:
      return Object.assign({}, state, {addingSmurf: false, smurfAdded: true, smurfs: action.payload})
    case UPDATING:
      return Object.assign({}, state, {updatingSmurf: true})
    case UPDATED:
      return Object.assign({}, state, {updatingSmurf: false, smurfUpdated: true, smurfs: action.payload})
    case DELETING:
      return Object.assign({}, state, {deletingSmurf: true})
    case DELETED:
      return Object.assign({}, state, {deletingSmurf: false, smurfDeleted: true, smurfs: action.payload})
    default:
      return state;
  }
};

export default smurfReducer;
