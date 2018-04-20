import { FETCHING_SMURFS, FETCH_SUCCESS, FETCHING_ERROR } from '../actions/getSmurfs';

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      }
    
    case FETCHING_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "We ran into a problem fetching your data!"
      }

    default: return state;
  }
}