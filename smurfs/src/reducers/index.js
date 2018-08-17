/*
  Be sure to import in all of the action types from `../actions`
*/
import {
   FETCH_SMURFS,
   FETCH_SUCCESS,

   ADDING_SMURF,
   ADD_SUCCESS,

   DELETE_SMURF,
   DELETE_SUCCESS,
   EDIT_SMURF,
   EDIT_SUCCESS,
   
  } from "../actions";


// Your initial/default state for this project could *Although does not have to* look a lot like this
  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    deletingSmurf: false,
    updatingSmurf: false,
    error: null
  }


  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
      case FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload
      });

      case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
      });
      case ADD_SUCCESS:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfs: action.payload
      });

      case DELETE_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true,
      });
      case DELETE_SUCCESS:
      return Object.assign({}, state, {
        deletingSmurf: false,
        smurfs: action.payload
      });

      case EDIT_SMURF:
      return Object.assign({}, state, {
        updatingSmurf: true,
      });
      case EDIT_SUCCESS:
      return Object.assign({}, state, {
        updatingSmurf: false,
        smurfs: action.payload
      });

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
