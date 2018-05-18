import {  } from '../actions';

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
}


const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default smurfReducer;
