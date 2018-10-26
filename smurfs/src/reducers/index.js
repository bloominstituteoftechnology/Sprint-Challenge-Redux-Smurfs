import { GOT_SMURFS, FETCHING_SMURFS } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  // addingSmurf: false
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
    default:
      return state
  }
}

export default smurfReducer;
