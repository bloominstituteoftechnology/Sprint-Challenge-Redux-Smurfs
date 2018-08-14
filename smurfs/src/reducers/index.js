
/*
  Be sure to import in all of the action types from `../actions`
*/


 /*Your initial/default state for this project could *Although does not have to* look a lot like this*/

 const initialState =  {
   smurfs: [],
   fetchingSmurfs: false,
   fetched: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_SMURFS':
      return Object.assign({}, state, {fetchingSmurfs: true})
    case 'FETCHED':
      return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
    case 'ERROR':
      return Object.assign({}, state, {error: action.payload});
    case 'ADDING_SMURF':
      return Object.assign({}, state, {fetchingSmurfs: true, fetched: false})
    case 'ADDED':
      return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
    case 'DELETING_SMURF':
      return Object.assign({}, state, {fetchingSmurfs: true, fetched: false})
    case 'DELETED':
      return Object.assign({}, state, {fetchingSmurfs: false, fetched: true, smurfs: action.payload})
    default:
        return state;
  }
}

export default smurfReducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
