/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHINGSMURFS,
  FETCHEDSMURF,
  ADDINGSMURF,
  ADDEDSMURF,
  UPDATINGSMURF,
  UPDATEDSMURF,
  DELETINGSMURF,
  DELETEDSMURF,
  ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurf: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  updatedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: null
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHINGSMURFS:
      return { ...state, fetchingSmurfs: true, fetchedSmurf: false };
    case FETCHEDSMURF:
      return { ...state, fetchingSmurfs: false, fetchedSmurf: true };
    case ADDINGSMURF:
      return { ...state, addingSmurf: true, addedSmurf: false };
    case ADDEDSMURF:
      return { ...state, addingSmurf: false, addedSmurf: true };
    case UPDATINGSMURF:
      return { ...state, updatingSmurf: true, updatedSmurf: false };
    case UPDATEDSMURF:
      return { ...state, updatingSmurf: false, updatedSmurf: true };
    case DELETINGSMURF:
      return { ...state };
    case DELETEDSMURF:
      return { ...state };
    case ERROR:
    default:
      return state;
  }
};

export default mainReducer;
