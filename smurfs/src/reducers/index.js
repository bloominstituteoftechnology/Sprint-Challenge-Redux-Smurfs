/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURF, FETCHED_SMURF, ERROR, ADDING_SMURF,  ADD_SMURF} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: true })
    case FETCHED_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: false, fetchedSmurfs: true, smurfs: action.payload})
    case ERROR:
      return Object.assign({}, state, { error: action.payload, fetchedSmurfs: false, fetchingSmurfs: false })
    case ADDING_SMURF:
      return Object.assign({}, state, { addingSmurf: true, addedSmurf: false});
    case ADD_SMURF:
      return Object.assign({}, state, { addingSmurf: false, addedSmurf: true, smurfs: action.payload });
   
    
    
      default: 
      return state;
    }
  }

  export default smurfReducer;