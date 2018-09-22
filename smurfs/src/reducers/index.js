import { FETCH_SMURFS, FETCHING_SMURFS, ADD_SMURF, ADDING_SMURF, DELETE_SMURF, DELETING_SMURF, ERROR } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }

    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      }
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      }

    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.id)
      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
      }

    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      }
    
    default:
      return state;
  }
}