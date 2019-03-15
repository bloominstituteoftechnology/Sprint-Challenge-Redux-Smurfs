import { FETCHING, FETCHED, ERROR, ADD_SMURF, ADDING_SMURF } from "../actions";

const initialState = {
smurfs: [],
fetchingSmurfs: false,
fetched: false,
addingSmurf: false,
updatingSmurf: false,
deletingSmurf: false,
error: null
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
    return {
      ...state,
      fetchingSmurfs: true
    };
    case FETCHED:
    return {
      ...state,
      fetchingSmurfs: false,
      fetched: true,
      smurfs: action.payload,
    }
    case ERROR: 
    return {
      ...state,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: "There has been an error loading content",
      
    }
    case ADDING_SMURF: 
    return {
      ...state,
      addingSmurf: true,
    }
    case ADD_SMURF:
    return {
      ...state,
      addingSmurf: false,
      smurfs: action.payload
    }

    default:
    return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
