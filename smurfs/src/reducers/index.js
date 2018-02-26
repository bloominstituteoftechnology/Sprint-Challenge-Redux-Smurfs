/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, SMURFS_FETCHED, ERROR_FETCHING_SMURFS } from '../actions/index';
import { SAVING_SMURFS, SMURFS_SAVED, ERROR_SAVING_SMURFS } from '../actions/index';


/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/
const initialState = {
      smurfs: [],
      fetchingSmurfs: false,  Getting Smurfs
      smurfsFetched: false,

      savingSmurfs: false,    Adding Smurfs
      smurfsSaved: false,

      updatingSmurf: false,   Updating Smurfs
      smurfUpdated: false,

      deletingSmurf: false,   Deleting Smurfs
      smurfDeleted: false,
  }
  


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
import { combineReducers } from 'redux';
import { getReducer, addReducer } from './reducers/index';

export const rootReducer = combineReducers({
  getReducer,
  addReducer,
});

