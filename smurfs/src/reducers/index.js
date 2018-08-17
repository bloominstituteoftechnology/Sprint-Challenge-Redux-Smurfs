/*
  Be sure to import in all of the action types from `../actions`
*/
import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  fetchSmurfsRequest,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
  addSmurfRequest,
  addSmurfSuccess,
  addSmurfFailure,
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
    [combineActions(fetchSmurfsSuccess, addSmurfSuccess)]: (_, { payload }) =>
      payload,
  },
  [],
);

const error = handleActions(
  {
    [combineActions(fetchSmurfsFailure, addSmurfFailure)]: (_, { payload }) =>
      payload,
  },
  null,
);

const isFetching = handleActions(
  {
    [fetchSmurfsRequest]: () => true,
    [combineActions(fetchSmurfsSuccess, fetchSmurfsFailure)]: () => false,
  },
  false,
);

const isAdding = handleActions(
  {
    [addSmurfRequest]: () => true,
    [combineActions(addSmurfSuccess, addSmurfFailure)]: () => false,
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
  error,
  isFetching,
  isAdding,
});
