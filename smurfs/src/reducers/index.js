import * as actionTypes from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   /* addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false */
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCHING_SMURFS:
          console.log('Fetching smurfs...');
          return {...state, fetchingSmurfs: true};
      case actionTypes.SMURFS_FETCHED:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false
        };
      case actionTypes.ERROR:
        return {...state, fetchingSmurfs: false, error: action.payload};
      default:
        return state;
    }
};

export default rootReducer;
