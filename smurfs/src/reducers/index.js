/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_DATA,
  DATA_FETCHED,
  FETCH_ERROR,
  INITIALIZE_SMURF_ADD,
  COMPLETE_SMURF_ADD,
  ADD_SMURF_ERROR,
  DISPLAY_UPDATE_FORM,
  UPDATING_SMURF,
  UPDATED_SMURF,
  UPDATE_ERROR,
} from '../actions';
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
const initialState = {
  smurfs: [],
  fetchingData: false,
  dataFetched: false,
  addingSmurf: false,
  error: '',
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...state,
        friends: action.payload,
        fetchingData: false,
        dataFetched: true,
        updatingFriend: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    case INITIALIZE_FRIEND_ADD:
      return {
        ...state,
        addingFriend: true,
      };
    case COMPLETE_FRIEND_ADD:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload,
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        error: 'Error adding friend',
        addingFriend: false,
      };
    // case DISPLAY_UPDATE_FORM:
    //   return {
    //     ...state,
    //     friends: state.friends.filter(
    //       (friend) => friend.id === action.payload.id
    //     ),
    //     updatingFriend: true,
    //   };
    // case UPDATING_FRIEND:
    //   break;
    // case UPDATED_FRIEND:
    //   break;
    // case UPDATE_ERROR:
    //   break;
    default:
      return state;
  }
  
};