/*
  Be sure to import in all of the action types from `../actions`
*/
import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  fetchSmurfsRequest,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
} from '../actions';
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

const smurfs = handleActions(
  {
    [fetchSmurfsSuccess]: (_, { payload }) => payload,
  },
  [],
);

const isFetching = handleActions(
  {
    [fetchSmurfsRequest]: () => true,
    [combineActions(fetchSmurfsSuccess, fetchSmurfsFailure)]: () => false,
  },
  false,
);

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default combineReducers({
  smurfs,
  isFetching,
});
