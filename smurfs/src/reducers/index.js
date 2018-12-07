import * as act from "../actions";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.FETCHING:
      return { ...state, fetchingSmurfs: true };
    case act.FETCHED:
      return { ...state, smurfs: [...state, ...action.payload] };
    case act.ADDING:
      return { ...state, addingSmurf: true };
    case act.ADDED:
      return { ...state, smurfs: action.payload };
    default:
      return state;
  }
};

export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
