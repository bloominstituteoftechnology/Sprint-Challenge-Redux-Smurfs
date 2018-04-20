/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurf: [],
  error: null, 
  fetching: false,
  fetched: true
};
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

export const smurfsReducer = ()
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
