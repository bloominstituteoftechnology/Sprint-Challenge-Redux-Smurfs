/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actionTypes from '../actions';
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
  fetchingSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.import { addSmurfs } from '../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, fetchingSmurf: true };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case actionTypes.UPDATING_SMURFS:
      return { ...state, updatingSmurf: true };
    case actionTypes.UPDATE_SMURFS:
      return { ...state, smurfs: action.payload, updatingSmurf: false };
    case actionTypes.DELETING_SMURFS:
      return { ...state, deletingSmurf: true };
    case actionTypes.DELETE_SMURFS:
      return { ...state, smurfs: action.payload, deletingSmurf: false };
    case actionTypes.ADDING_SMURFS:
      return { ...state, addingSmurf: true };
    case actionTypes.ADD_SMURFS:
      return { ...state, smurfs: action.payload, addingSmurf: false};
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurf: false,
        addingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default smurfsReducer;