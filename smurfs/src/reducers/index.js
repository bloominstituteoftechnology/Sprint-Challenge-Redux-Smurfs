/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  ADD_SMURF,
  GET_SMURFS,
} from '../actions/index.js';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_SMURF: 
      return {
        ...state,
        smurfs: action.payload
      };

    case GET_SMURFS: 
      return {
        ...state,
        smurfs: action.payload
      };

      default: return state;
  }
}