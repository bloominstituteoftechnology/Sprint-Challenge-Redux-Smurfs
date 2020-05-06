/*
  Be sure to import in all of the action types from `../actions`
*/

import { ERROR } from '../actions';
import { SUCCESS } from '../actions';
import { GETTING_SMURFS } from '../actions';


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


export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
     return Object.assign({}, state, { fetchingSmurf: true });
    case SUCCESS:
     return Object.assign({}, state, { smurfs: action.payload, fetchingSmurf: false, updatingSmurf: false, deleteSmurfs: false, addingSmurf: false, error: null });
    case ERROR:
     return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

