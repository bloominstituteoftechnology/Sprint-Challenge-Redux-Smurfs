import { 
  ERROR, 
  FETCHING, 
  FETCHED, 
  ADD } 
  from "../actions";

  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    // fetchedSmurfs: false,
    // addingSmurf: false,
    // addedSmurf: false,
    error: null
  }

  export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING:
        return { 
          ...state, 
          fetchingSmurfs: true };
      case FETCHED:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: [...state.smurfs, ...action.payload]
        };
      case ADD:
        return { 
          ...state, 
          fetchingSmurfs: false, 
          smurfs: action.payload
        }
      case ERROR:
        return { 
          ...state, 
          error: action.payload };
      default:
        return state;
    }
  }  