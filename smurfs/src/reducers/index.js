import { FETCHING_SMURFS, SMURFS_FETCHED, ERROR, ADD_SMURF, SMURF_ADDED, DELETE_SMURF, SMURF_DELETED, EDIT_SMURF, SMURF_EDITED  } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   updatingSmurf: false,
   smurfUpdated: false,
   deletingSmurf: false,
   smurfDeleted: false,
   error: null
 }

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: true
      });
      case ADD_SMURF:
      return Object.assign({}, state, {
        addingFriend: true
      });
      case SMURF_ADDED:
      return Object.assign({}, state, {
        addingFriend: false,
        friendAdded: true,
        friends: [...state.friends, action.payload]
      });
      case DELETE_SMURF:
      return Object.assign({}, state, {
        deletingFriend: true
      });
      case SMURF_DELETED:
      return Object.assign({}, state, {
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload
      });
      case EDIT_SMURF:
      return Object.assign({}, state, {
        updatingFriend: true
      });
      case SMURF_EDITED:
      return Object.assign({}, state, {
        updatingFriend: false,
        friendUpdated: true,
        friends: action.payload
      });
    default:
      return state;
  }
}

export default smurfsReducer;
