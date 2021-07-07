/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF,
  GET_SMURFS,
  DATA_REQUESTED,
  ERROR_OCCOURED
} from "../actions";

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
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  newSmurf: {}
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: false,
        newSmurf: {},
        smurfs: action.payload
      });
    case GET_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload
      });
    case DATA_REQUESTED:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        smurfsFetched: false,
        error: null
      });
    case ERROR_OCCOURED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default rootReducer;
