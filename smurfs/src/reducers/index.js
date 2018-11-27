/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
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
  
  switch(action.type) {
    case "FETCHING_SMURFS":
      return Object.assign({}, state, { fetchingSmurfs: true });
    
    case "ADDING_SMURF":
      return Object.assign({}, state, { addingSmurf: true });

    case "UPDATING_SMURF":
      return Object.assign({}, state, { updatingSmurf: true });

    case "ERROR":
      return Object.assign({}, state, { error: action.payload });

    default: 
      return state;
  }
};
