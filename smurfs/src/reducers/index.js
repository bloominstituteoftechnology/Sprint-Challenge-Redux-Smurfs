import {
  GET_SMURFS,
  GETTING_SMURFS,
  CREATING_SMURF,
  ERROR,
  CREATE_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  SINGLE_SMURF,
  TOGGLE_UPDATE_SMURF,
  TOGGLE_CREATING_SMURF
 } from '../actions';


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
initialState = {
  smurfs: [],
  getSmurfs: false,
  createSmurfs: false,
  deleteSmurfs: false,

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return state;
    case DELETE_SMURF:
      return state;
    case ADDING_SMURF:
      return state;
    case UPDATING_SMURF:
      return state;
    case DELETING_SMURF:
      return state;
    case GETTING_SMURFS:
      return state;
    case CREATING_SMURF:
      return state;
    case CREATE_SMURF:
      return state;
    case UPDATE_SMURF:
      return state;
    // case SINGLE_SMURF:
    //   return state;
    // case TOGGLE_UPDATE_SMURF:
    //   return state;
    // case TOGGLE_CREATING_SMURF:
    //   return state;
    default:
      return state;
  }
};