import { GOT_SMURFS, FETCHING_SMURFS, ADD_SMURF } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false
  // deletingSmurf: false
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SMURFS:
      return {
        smurfs: action.payload
      }
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true  
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      }
    default:
      return state
  }
}

export default smurfReducer;
