//reducer

/*
  Be sure to import in all of the action types from `../actions`
*/

import {GETTING_SMURFS,
  GOT_SMURFS,
  ERROR,
  // ADDING_SMURF,
  // UPDATING_SMURF,
  // DELETING_SMURF
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const initialState =  {
   smurfs: [{
     name: 'default',
     age: 20,
     height: '55cm'
   }],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   count: 0,
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reduceTheSmurfs = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case GOT_SMURFS:
      return Object.assign({}, state, {
        smurfs: [ action.payload.data],
        fetchingSmurfs: false,
        count: (action.payload.length) + 1,
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state;
  }
}
