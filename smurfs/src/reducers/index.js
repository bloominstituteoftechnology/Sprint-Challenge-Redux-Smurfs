import {FETCHING,FETCHED,ADDING, ADDED, ERROR} from '../actions';

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
  fetchedSmurfs: false,
  addingSmurfs: false,
  addedSmurfs:false,
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
export default (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        fetchedSmurfs: false
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload
      });
    case ADDING:
      return Object.assign({}, state, {
        addingSmurfs: true,
        addeddSmurfs: false
      })
    case ADDED:
      return Object.assign({}, state, {
        addingSmurfs: false,
        addedSmurfs: true,
        smurfs: state.smurfs.concat(action.payload)
        })
    case ERROR:
        return Object.assign({}, state, {
          fetchingSmurfs: false,
          fetchedSmurfs: true,
          addingSmurfs: false,
          addedSmurf: true,
          error: action.payload
        });
    default:
        return state;
  }
}
