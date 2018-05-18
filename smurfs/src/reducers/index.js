import {GOT_SMURFS, GETTING_SMURFS, ADD_SMURF, ERROR, DELETE_SMURF} from "../actions";

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export default (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: action.payload})
    case GOT_SMURFS:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false});
    case ADD_SMURF:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload)});
    case ERROR:
      return Object.assign({}, state, {error: action.payload, fetchingSmurfs: false});
    case DELETE_SMURF:
      return Object.assign({}, state, {smurfs: action.payload});
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
