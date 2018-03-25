import { 
  FETCHED, 
  ERROR,
  FETCHING,
  ADD_SMURF,
  DELETE_SMURF,
  UPDATE_SMURF
   } from "../actions";

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

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case FETCHED:
      return Object.assign({}, initialState, {
        smurfs: action.smurfs,
      });
    case ERROR:
      return Object.assign({}, state, {
          error: action.errorMessage,
      });
    case ADD_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
        smurfs: state.smurfs.concat({
          id: action.id,
          name: action.name,
          age: action.age,
          height: action.height
        })
      })
    case DELETE_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.id),
      })
    case UPDATE_SMURF:
    return Object.assign({}, state, {
      updatingSmurf: true,
      smurfs:[]
    })
      default:
        return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
