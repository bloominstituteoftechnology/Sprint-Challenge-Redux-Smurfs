/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, GOT_SMURFS, CREATING_SMURF, CREATED_SMURF, ERROR } from '../actions';

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

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  gotSmurfs: false,
  creatingSmurfs: false,
  createdSmurf: false,
  error: true,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {

};

export default rootReducer;
