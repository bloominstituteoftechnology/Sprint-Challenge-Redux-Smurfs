import {
  SMURFS_FETCHED,
  FETCHING_SMURFS,
  ERROR
} from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetching: false
  addingSmurf: false
  updatingSmurf: false
  deletingSmurf: false
  error: null
};

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

export default (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        avengers: state.smurfs.concat(action.payload),
        fetching: false
      });
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        editing: false,
        error: action.payload
      });
  //   case EDITING_AVENGER:
  //     return Object.assign({}, state, { editing: true });
  //   case AVENGER_UPDATED:
  //     return Object.assign({}, state, {
  //       avengers: action.payload,
  //       editing: false
  //     });
  //   default:
  //     return state;
  // }
};