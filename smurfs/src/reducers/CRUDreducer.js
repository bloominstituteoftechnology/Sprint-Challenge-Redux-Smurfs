import { FETCHING_SMURFS, FETCH_SUCCESS, FETCHING_ERROR } from '../actions/crud/getSmurfs';
import { FETCH_NEW_SMURF, ADD_SMURF_ERROR } from '../actions/crud/addSmurf';
import { DELETE_SMURF, DELETE_ERROR } from '../actions/crud/deleteSmurf';
import { UPDATE_SMURF, UPDATE_ERROR } from '../actions/crud/updateSmurf';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };

export const CRUDreducer = (state = initialState, action) => {
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
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      }

    case DELETE_ERROR:
      return { ...state, error: "We're experiencing a problem deleting this smurf." }

    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => action.payload.id === smurf.id ? action.payload : smurf )
      }

    case UPDATE_ERROR:
      return { ...state, error: "We can't update this smurf!" }

    default: return state;
  }
}