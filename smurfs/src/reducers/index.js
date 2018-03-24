import { combineReducers } from 'redux';

import { SHOW_LOADING, HIDE_LOADING, 
  GOT_SMURFS, UPD_SMURF, DEL_SMURF, ERROR  } from '../actions';
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

const smurfReducer = (smurfs = [], action) => {
  switch (action.type) {
    case GOT_SMURFS:
      return action.payload;
    default:
      return smurfs;
  }
};

const loadingReducer = (isLoading = false, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return isLoading;  
  }
};

export const rootReducer = combineReducers({
  smurfs: smurfReducer,
  isLoading: loadingReducer
});