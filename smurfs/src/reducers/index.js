import {
  FETCH_SMURF,
  CREATE_SMURF,
  ADDING_SMURF_SUCC,
  ADDING_SMURF_FAIL,
  DELETING_SMURF
} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

function reducer( state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        error: '',
        addingSmurf: false
      };
    case CREATE_SMURF:
      return {
        ...state,
        error: '',
        addingSmurf: true
      }
    case ADDING_SMURF_SUCC:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
        error: null
      }
    case ADDING_SMURF_FAIL: 
      return {
      ...state,
      addingSmurf: false,
      error: action.payload
    }
    case DELETING_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      }
    default:
      return state;
  }
}
