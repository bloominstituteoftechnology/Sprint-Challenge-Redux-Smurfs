/*
  Be sure to import in all of the action types from `../actions`
*/

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
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {

  switch(action.type) {
    case 'FETCHING_SMURFS':
        return Object.assign({}, state, { fetchingSmurfs: true });

    case 'SMURFS_FETCHED':
      return Object.assign({}, state, { smurfs: action.payload, smurfsFetched: true, fetchingSmurfs: false });

    case 'ADDING_SMURF':
      return Object.assign({}, state, { addingSmurf: true });

    case 'SMURF_ADDED':
      return Object.assign({}, state, { smurfs: action.payload, smurfAdded: true, addingSmurf: false });
      
    default:
      return state;
  }

};