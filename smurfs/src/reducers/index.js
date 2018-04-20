/*
  Be sure to import in all of the action types from `../actions`
*/
import * as Type from '../actions';
/*
 Your initial/default state for this project could look a lot like this
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

const rootReducer = (state, action) => {
  switch(action.type) {
    case Type.GET_PENDING:
      return {...state, fetchingSmurfs: true, error: null};
    case Type.GET_SUCCESS:
      return {...state, fetchingSmurfs: false, error: null, smurfs: action.payload};
    case Type.ERROR:
      return {...state, error: action.payload};
  }
};

export default rootReducer;