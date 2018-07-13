import { FETCH_START } from '../actions/index.js';
import { FETCH_SUCCESS } from '../actions/index.js';
import { FETCH_ERROR } from '../actions/index.js';

import { combineReducers } from 'redux';

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

const smurfsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}

export const getSmurfs = (state) => state.smurfs;

const fetchStateReducer = (state = 'resting', action) => {
  switch (action.type) {
    case FETCH_START:
      return 'fetching';
    case FETCH_SUCCESS:
      return 'resting';
    case FETCH_ERROR:
      return 'resting';
    default:
      return state;
  }
}

export const getFetchState = (state) => state.fetchState;

export default combineReducers({smurfs: smurfsReducer, fetchState: fetchStateReducer});