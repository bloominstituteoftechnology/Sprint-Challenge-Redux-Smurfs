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
  gettingSmurfs: false,
  gotSmurfs: false,
  postingSmurf: false,
  postedSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: true,
        smurfs: action.payload,
      };
    case actionTypes.POSTING_SMURF:
      return { ...state, postingSmurf: true};
    case actionTypes.POST_SMURF:
      return {
        ...state,
        postedSmurf: true,
        postingSmurf: false,
        smurfs: action.payload,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: false,
        postingSmurf: false,
        postedSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smurfReducer;

