import { FETCH_SMURFS, FETCHED_SMURFS, ADD_SMURF, ADDED_SMURF, ERROR} from "../actions";

 export default (state = initialState, action) => {
  switch(action.type) {
     case FETCH_SMURFS:
      return {...state, fetchingSmurfs: true};
     case FETCHED_SMURFS:
      return {...state, fetchingSmurfs: false, smurfs: action.payload};
     case ADD_SMURF:
      return {...state, addingSmurf: true};
     case ADDED_SMURF:
      return {...state, addingSmurf: false, smurfs: action.payload};
     case ERROR:
      return {...state, addingSmurf: false, error: action.payload};
     default:
      return state;
  }
};