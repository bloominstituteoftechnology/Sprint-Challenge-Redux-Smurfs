import { FETCHING_SMURFS, SMURFS_FETCHED, ERROR, ADD_SMURF, SMURF_ADDED, DELETE_SMURF, SMURF_DELETED, EDIT_SMURF, SMURF_EDITED,TOGGLE_SMURF } from '../actions';

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

const smurfsReducer = ( state = initialState, action) => {
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
        addingSmurf: true
      });
      case SMURF_ADDED:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfAdded: true,
        smurfs: [...state.smurfs, action.payload]
      });
      case DELETE_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true
      });
      case SMURF_DELETED:
      return Object.assign({}, state, {
        deletingSmurf: false,
        smurfDeleted: true,
        smurfs: action.payload
      });
      case EDIT_SMURF:
      return Object.assign({}, state, {
        updatingSmurf: true
      });
      case SMURF_EDITED:
      return Object.assign({}, state, {
        updatingSmurf: false,
        smurfUpdated: true,
        smurfs: action.payload
      });
      case TOGGLE_SMURF:
      return Object.assign({}, state, {
        smurfs: state.smurfs.map(smurf => {
          if (smurf.id === action.payload) {
            return { ...smurf, toggled: !smurf.toggled };
          }
          return smurf;
        })
      });
    default:
      return state;
  }
}

export default smurfsReducer;
