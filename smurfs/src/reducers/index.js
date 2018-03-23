/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, FETCHED_SMURFS, GET_ERROR } from '../actions/getActions';
import { ADD_SMURF, ADDED_SMURFS, ADD_ERROR } from '../actions/addActions';

//Your initial/default state for this project could look a lot like this
initialState = {
  smurfs: [],
  getSmurfs: false,
  addSmurfs: false
  //updatingSmurf: false
  //deletingSmurfs: false
  //error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return action.smurfs;
    default:
      return smurfs;

      break;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
