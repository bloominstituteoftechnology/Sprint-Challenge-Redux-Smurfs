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
   error: true
 }
*/
import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  updatingSmurf: false,
  creatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { 
      ...state, 
      gettingSmurfs: true };

    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurfs: false };
    case actionTypes.DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case actionTypes.DELETE_SMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false };
    case actionTypes.CREATING_SMURF:
      return { ...state, creatingSmurf: true };
    case actionTypes.CREATE_SMURF:
      return { ...state, smurfs: action.payload, creatingSmurf: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
