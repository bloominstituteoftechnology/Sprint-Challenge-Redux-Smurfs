import {
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF,
  UPDATING_SMURF,
  UPDATED_SMURF,
  DELETING_SMURF,
  DELETED_SMURF,
  ERROR
} from "../actions";

/*Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  updatedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      console.log("fetching smurfs");
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED_SMURFS:
      console.log("fetched smurfs");
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: [...state.smurfs, ...action.payload]
      });
    case ADDING_SMURF:
      console.log("adding smurf");
      return Object.assign({}, state, {
        addingSmurf: true
      });
    case ADDED_SMURF:
      console.log("added smurf");
      return Object.assign({}, state, {
        addingSmurf: false,
        addedSmurf: true,
        smurfs: [...action.payload]
      });
    case UPDATING_SMURF:
      console.log("updating smurf");
      return Object.assign({}, state, {
        updatingSmurf: true
      });
    case UPDATED_SMURF:
      console.log("updated smurf");
      return Object.assign({}, state, {
        updatingSmurf: false,
        updatedSmurf: true,
        smurfs: [...action.payload]
      });
    case DELETING_SMURF:
      console.log("deleting smurf");
      return Object.assign({}, state, {
        deletingSmurf: true
      });
    case DELETED_SMURF:
      console.log("deleted smurf");
      return Object.assign({}, state, {
        deletingSmurf: false,
        deletedSmurf: true,
        smurfs: [...action.payload]
      });
    case ERROR:
      console.log("error", action.payload);
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};
