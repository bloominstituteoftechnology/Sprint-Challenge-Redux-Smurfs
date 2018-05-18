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

const mainReducer = (state, action) => {
  switch (action.type) {
    case FETCHINGSMURFS:
    case FETCHEDSMURF:
    case ADDINGSMURF:
    case ADDEDSMURF:
    case UPDATINGSMURF:
    case UPDATEDSMURF:
    case DELETINGSMURF:
    case DELETEDSMURF:
    case ERROR:
    default:
      return state;
  }
};

export default mainReducer;
