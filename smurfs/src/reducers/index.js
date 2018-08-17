//reducer

/*
  Be sure to import in all of the action types from `../actions`
*/

import {GETTING_SMURFS,
  GOT_SMURFS,
  ERROR,
  ADDING_SMURF,
  ADDED_SMURF,
  ADD_SMURF_FAILED,
  // DELETING_SMURF
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const initialState =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   count: 0,
 }
export const reduceTheSmurfs = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case GOT_SMURFS:
      return Object.assign({}, state, {
        smurfs: action.payload.data,
        fetchingSmurfs: false,

      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
    case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
      })
    case ADDED_SMURF:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfs: action.payload.data,
        count: (action.payload.length) + 1,
      })
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
