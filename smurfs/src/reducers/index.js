import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, DELETING_SMURFS } from "../actions";

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};

    case FETCHING_SMURFS_SUCCESS:
      return {...state, fetchingSmurfs: false, deletingSmurf: false, smurfs: [...action.payload]};

    case FETCHING_SMURFS_FAILURE:
      return {...state, fetchingSmurfs: false, error: action.payload};

    case DELETING_SMURFS:
      return {...state, deletingSmurf: true};

    default:
      return state
  }
}

export default smurfsReducer;