import {FETCHING_SMURF,FETCHED_SMURF,FETCHING_ERROR} from '../actions';
const initialState = {
  smurfs : {data: []},
  fetchingsmurf: false,
  fetchedsmurf: false,
  error: null
};
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return {...state, fetchingsmurf: true};
    case FETCHED_SMURF:
      return {...state, fetchingsmurf: false, fetchedsmurf: true, smurfs: action.payload};
    case FETCHING_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
