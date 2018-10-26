import {
  GETTING_SMURFS,
  GETTING_SMURFS_SUCCESS,
  GETTING_SMURFS_FAILURE,
  CREATING_SMURF,
  CREATING_SMURF_SUCCESS,
  CREATING_SMURF_FAILURE
} from "../actions";

let idNum = 0;
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  creatingSmurf: false,
  id: idNum++,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case GETTING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        gettingSmurfs: false
      };
    case GETTING_SMURFS_FAILURE:
      return { ...state, error: action.payload };
    case CREATING_SMURF:
      return { ...state, creatingSmurf: true };
    case CREATING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        creatingSmurf: false
      };
    case CREATING_SMURF_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
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
