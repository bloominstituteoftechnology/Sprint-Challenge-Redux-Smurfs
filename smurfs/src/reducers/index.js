import { ERROR,  FETCHING_SMURFS, FETCH_SMURFS, ADDING_SMURF, ADD_SMURF } from '../actions/index';

const initialState = {
  fetchingSmurfs: false,
  addingSmurf: false,
  smurfs: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS: 
      return {...state, fetchingFriends: true}
    case FETCH_SMURFS: 
      return {...state, friends: action.payload, fetchingFriends: false};
    case ADDING_SMURF:
      return {...state, addingFriend: true};
    case ADD_SMURF:
      return {...state, addingFriend: false, friends: action.payload};
    default:
      return state;
  }
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
