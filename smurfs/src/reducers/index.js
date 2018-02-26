import { combineReducers } from 'redux';
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
   error: true
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
const stateTest = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: true
 }

const smurfs = (state = stateTest, action) => {
  switch (action.type) {
      case 'IS_FETCHING':
        return {
          ...state,
          fetchingSmurfs: true,
        };
      case 'SMURFS_FETCHED':
        return {
          ...state,
          smurfsFetched: true,
          fetchingSmurfs: false,
          smurfs: action.payload
        };
      case 'ADDING_SMURF':
        return {
          ...state,
          addingSmurf: true,
        };
      case 'ADD_SMURF':
        return {
          ...state,
          addingSmurf: false,
          smurfs: action.payload
        }
      case 'DELETING_SMURF':
        return {
          ...state,
          deletingSmurf: true,
        };
      case 'DELETE_SMURF':
        return {
          ...state,
          smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.SmurfRemoved.id),
          deletingSmurf: false
        }
      case 'ERROR':
        return {
          ...state,
          fetchingSmurfs: false,
          error: true
        };
      default:
        return state;
  }
}

export default smurfs;
