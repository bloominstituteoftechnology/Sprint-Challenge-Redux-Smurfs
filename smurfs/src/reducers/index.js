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
    console.log(action.fetched);
      return { ...state, fetchingSmurfs: false, fetchedSmurf: true, smurfs: action.fetched };
    case ADDINGSMURF:
      return { ...state, addingSmurf: true, addedSmurf: false };
    case ADDEDSMURF:
    console.log([...state.smurfs].push(action.newItem));
      return { ...state, addingSmurf: false, addedSmurf: true, smurfs: action.newItem };
    case UPDATINGSMURF:
      return { ...state, updatingSmurf: true, updatedSmurf: false };
    case UPDATEDSMURF:
      return { ...state, updatingSmurf: false, updatedSmurf: true };
    case DELETINGSMURF:
      return { ...state, deletingSmurf: true, deletedSmurf: false };
    case DELETEDSMURF:
      console.log("action.toDelete",action.toDelete);
      return { ...state, deletingSmurf: false, deletedSmurf: true, smurfs: action.toDelete };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false
      };
    default:
      return state;
  }
};

export default mainReducer;
