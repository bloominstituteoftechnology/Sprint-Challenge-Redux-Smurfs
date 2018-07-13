import {FETCHING_SMURF,FETCHED_SMURF,FETCHING_ERROR, POSTING_SMURF, POSTED_SMURF, POSTING_ERROR, UPDATE_FORM} from '../actions';
const initialState = {
  smurfs : {data: []},
  fetchingsmurf: false,
  fetchedsmurf: false,
  postingsmurf: false,
  postedsmurf: false,
  updateform: false,
  smurfname: "Tom",
  smurfage: "21",
  smurfheight: "100",
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
    case UPDATE_FORM:
      return {...state, updateform: true, }
    default:
      return state;
  }
};
