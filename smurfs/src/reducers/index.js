import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR, BEGIN_EDIT, CANCEL_EDIT, BEGIN_ADD, CANCEL_ADD, DELETE_SMURF, EDIT_SMURF, ADD_SMURF } from '../actions';

//smurfs is the array of smurfs
//error holds any error message received
//appState powers our finite state machine
//editIndex tells the edit form which smurf we're editing
const initialState = {
  smurfs: [],
  error: null,
  appState: "default",
  editIndex: null
};

//Many of these cases are redundant with one another in terms of what they do
//I wanted the actions to have separate names for the sake of the logger and dev tools.

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
      return Object.assign({}, state, {appState: "fetching", editIndex:null});
    case ADD_SMURF:
      return Object.assign({}, state, {appState: "fetching"});
    default:
      return state;
  }
};

export default smurfsReducer;
