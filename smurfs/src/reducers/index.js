import { combineReducers } from "redux";
import { smurfsReducer } from "./SmurfsReducer";
import {
  FETCHING_SMURF,
  FETCHED_SMURF,
  DELETE_SMURF,
  SUBMIT_SMURF,
  EDIT_SMURF
} from "../actions";

export default combineReducers({
  smurfsReducer
});

const initialState = {
  smurfs: [],
  isFetching: false,
  isFetched: false
};

export const smurfReducer = (state = initialState, { type, smurfs, id }) => {
  switch (type) {
    case FETCHING_SMURF:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_SMURF:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        smurfs
      };
    case DELETE_SMURF:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        smurfs
      };
    case SUBMIT_SMURF:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        smurfs
      };
    case EDIT_SMURF:
      const index = smurfs.findIndex(smurf => smurf.id === id);
      return {
        ...state,
        smurfs: [
          ...smurfs.slice(0, index),
          (smurfs[index] = {
            ...smurfs[index],
            isEditing: true
          }),
          ...smurfs.slice(index + 1)
        ]
      };
    default:
      return state;
  }
};

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
