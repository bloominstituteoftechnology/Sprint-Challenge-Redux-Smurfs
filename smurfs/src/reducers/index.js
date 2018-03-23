/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS, GET_ERROR } from '../actions/getActions';

//Your initial/default state for this project could look a lot like this
initialState = {
  smurfs: [],
  getSmurfs: false,
  addSmurfs: false
  //updatingSmurf: false
  //deletingSmurfs: false
  //error: null
};

export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
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
