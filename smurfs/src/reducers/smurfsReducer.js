import { FETCHING, GET_SMURFS, ERR, ADDING, CREATE_SMURF } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch ( action.type) {
    case FETCHING:
    return {...state, fetchingSmurfs: true}
    case GET_SMURFS:
    return {...state, smurfs: [...action.payload], fetchingSmurfs: false}
    case ERR:
    return {...state, fetchingSmurfs: false, error: action.payload}
    case ADDING:
    return {...state, addingSmurf: true}
    case CREATE_SMURF:
    return { ...state, smurfs: action.payload, addingSmurf: false };
    default:
    return state
  }
}

