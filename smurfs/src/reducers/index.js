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

import * as actionTypes from '../actions/index.js';

const initialState = {
    smurfs: [],
    fetchingSmurfs: null,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_SMURFS:
            return { ...state, fetchingSmurfs: true };
        case actionTypes.FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                fetchingSmurfs: false
            };
        case actionTypes.FETCHING_SMURFS_FAILURE:
            return { ...state, fetchingSmurfs: false, error: action.payload };
        case actionTypes.ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            };
        default:
            return state;
    }
};