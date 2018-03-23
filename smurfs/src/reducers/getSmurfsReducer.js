/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHED, ERROR } from '../actions/getSmurfsAction';

const initialState = {
  smurfs: [],
  //fetchingSmurfs: false,
  //addingSmurf: false,
  //updatingSmurf: false,
  //deletingSmurfs: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.error };
    case FETCHED:
      return {
        ...state,
        smurfs: action.smurfs,
        error: null
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
