import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.GETTING_SMURF:
      return { ...state, gettingSmurf: true };
    case actionTypes.GET_SMURF:
      return { ...state, smurfs: action.payload, gettingSmurf: false };
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case actionTypes.ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurf: false,
        error: action.payload
      };

      case actionTypes.TOGGLE_SMURF:
      return { ...state, deletingSmurf: true };

      case actionTypes.DELETE_SMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false };

    default:
      return state;
  }
}

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
