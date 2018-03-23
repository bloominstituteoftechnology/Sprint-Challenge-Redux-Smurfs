/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHED_FRIEND,
  FETCHING_FRIEND,
  ERROR_FETCHING_FRIEND,
  // CREATING_FRIEND,
  // ERROR_CREATING_FRIEND,
  // FRIEND_CREATED,
  // DELETING_FRIEND,
  // FRIEND_DELETED,
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  // savingFriends: false,
  // deletingFriend: false,
  // friendDeleted: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIEND:
      return { ...state, fetching: true };
    case ERROR_FETCHING_FRIEND:
      return { ...state, error: action.errorMessage };
    case FETCHED_FRIEND:
      return {
        ...state,
        friends: action.friends,
        fetching: false,
        error: null
      };
    // case CREATING_FRIEND:
    //   return { ...state, savingFriends: true };
    // case ERROR_CREATING_FRIEND:
    //   return { ...state, error: action.error };
    // case FRIEND_CREATED:
    //   return { ...state, friends: action.friends, savingFriends: false };
    // case DELETING_FRIEND:
    //   return {...state, deletingFriend: true};
    // case FRIEND_DELETED:
    //   return {...state, friends: action.friends, deletingFriend: false, error: null};
    default:
      return state;
  }
};