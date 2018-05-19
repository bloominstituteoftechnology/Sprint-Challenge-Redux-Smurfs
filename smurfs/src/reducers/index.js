/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  fetched: false,
  error:null
};

// The comments that were already in this document were very helpful :)

export const myReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCHING:
    return {...state, pending:true };
  case FETCHED:
    return {...state, smurfs: action.payload };
  case ERROR:
    return state;

  default:
    return state;

  }
};

//I created a reducer for each action here.
