/*
  Be sure to import in all of the action types from `../actions`
*/

import { 
  FETCHING,
  FETCHED,
  ERROR,
  ADDING_SMURF
} from '../actions/index'; 


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      console.log(state);
      console.log(action.payload);
      return Object.assign({}, state, {fetchingSmurfs: true, fetched: false, error: null });
    case FETCHED:
      console.log('fetched: ', action.payload)
      return {...state,
        smurfs: action.payload,
        fetchedSmurfs: true,
        fetchingSmurfs: false,
        error: null
      };
    case ADDING_SMURF:
      return Object.assign({}, state, {addingSmurf: true, fetchedSmurfs: false});
    case ERROR:
      return {
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        error: "Uh oh, looks like something went wrong." + ' ' + action.payload };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default rootReducer;