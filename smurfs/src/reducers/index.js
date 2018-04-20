import { FETCHING_SMURFS, FETCH_SUCCESS, FETCHING_ERROR } from '../actions/getSmurfs';
import { FETCH_NEW_SMURF, ADD_SMURF_ERROR } from '../actions/addSmurf';
import { DELETE_SMURF, DELETE_ERROR } from '../actions/deleteSmurf';
import { UPDATE_SMURF } from '../actions/updateSmurf';

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

    case FETCH_NEW_SMURF:
      return {
        ...state,
        smurfs: [...action.payload],
        fetching: false,
        fetched: true
      }

    case ADD_SMURF_ERROR:
      return { ...state, error: "We're having some trouble adding this smurf." }
    
    case DELETE_SMURF:
      debugger
      return {
        ...state,
        smurfs: [...action.payload]
      }

    case DELETE_ERROR:
      return { ...state, error: "We're experiencing a problem deleting this smurf." }

    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => action.payload.id === smurf.id ? action.payload : smurf )
      }

    default: return state;
  }
}