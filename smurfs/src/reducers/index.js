import { FETCH_SMURFS, FETCHING_SMURFS, ADD_SMURF, ADDING_SMURF, ERROR } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
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