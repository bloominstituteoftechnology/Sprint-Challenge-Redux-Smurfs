/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR, BEGIN_EDIT, CANCEL_EDIT, BEGIN_ADD, CANCEL_ADD, DELETE_SMURF, EDIT_SMURF, ADD_SMURF } from '../actions';
const initialState = {
  smurfs: [],
  error: null,
  appState: "default",
  editIndex: null
};
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {appState: "fetching"});
    case FETCHED_SMURFS:
      return Object.assign({}, state, {smurfs: action.payload, appState: "fetched"});
    case ERROR:
      return Object.assign({}, state, {appState: "error", error: action.payload});
    case BEGIN_EDIT:
      return Object.assign({}, state, {appState: "edit", editIndex: action.payload});
    case CANCEL_EDIT:
      return Object.assign({}, state, {appState: "fetched", editIndex: null});
    case BEGIN_ADD:
      return Object.assign({}, state, {appState: "add"});
    case CANCEL_ADD:
      return Object.assign({}, state, {appState: "fetched"});
    case DELETE_SMURF:
      return Object.assign({}, state, {appState: "fetching"});
    case EDIT_SMURF:
      return Object.assign({}, state, {appState: "fetching"});
    case ADD_SMURF:
      return Object.assign({}, state, {appState: "fetching"});
    default:
      return state;
  }
};

export default smurfsReducer;
