import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  UPDATING_SMURF,
  SMURF_UPDATED,
  DELETING_SMURF,
  SMURF_DELETED,
  ERROR
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
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


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      console.log('fetching smurfs');
      return Object.assign({}, state, {
        fetchingSmurfs: true
      })
    case SMURFS_FETCHED:
      console.log('smurfs fetched');
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case ADDING_SMURF:
      console.log('adding smurf');
      return Object.assign({}, state, {
        addingSmurf: true
      })
    case SMURF_ADDED:
      console.log('smurf added');
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfAdded: true,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case UPDATING_SMURF:
      console.log('updating smurf');
      return Object.assign({}, state, {
        updatingSmurf: true
      })
    case SMURF_UPDATED:
      console.log('smurf updated');
      return Object.assign({}, state, {
        updatingSmurf: false,
        smurfUpdated: true,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case DELETING_SMURF:
      console.log('deleting smurf');
      return Object.assign({}, state, {
        deletingSmurf: true
      })
    case SMURF_DELETED:
      console.log('smurf deleted');
      return Object.assign({}, state, {
        deletingSmurfs: false,
        smurfDeleted: true,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case ERROR:
      console.log('error', action.payload);
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state;
  }
}
