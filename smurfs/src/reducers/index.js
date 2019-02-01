import { 
  ERROR, 
  FETCHING, 
  FETCHED, 
  ADDING,
  ADD
} 
  from "../actions";

  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
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
        case ADDING:
        return { 
          ...state, 
          addingSmurf: true };
      case ADD:
        return { 
          ...state, 
          addingSmurf: false,
       
        }
      case ERROR:
        return { 
          ...state, 
          error: action.payload };
      default:
        return state;
    }
  }  