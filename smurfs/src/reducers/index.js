import { GET_SMURFS, GOT_SMURFS, ADD_SMURF } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/


 //Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case GOT_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: false, smurfs: action.payload });
    case ADD_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: false, addingSmurf: true, smurfs: action.payload });
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
