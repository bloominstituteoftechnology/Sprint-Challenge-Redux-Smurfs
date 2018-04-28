/*
  Be sure to import in all of the action types from `../actions`
*/

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

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

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCHING):
      return Object.assign({}, state, { fetchingSmurfs: true })
    case (FETCHED):
      return Object.assign({}, state, { smurfs: action.payload, fetchingSmurfs: false })
    default:
      return state
  }
}

export default reducer;