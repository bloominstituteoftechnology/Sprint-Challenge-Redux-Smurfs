import { ERROR, FETCHING, FETCHED, ADD } from "../actions";

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export const smurfsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload
      };
    case ADD:
      return { ...state, fetchingSmurfs: false, addedSmurf: true };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
