/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actionTypes from '../actions';

/*
 Your initial/default state for this project could look a lot like this
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false
  addingSmurf: false
  updatingSmurf: false
  deletingSmurfs: false
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes. :
      return { ...state, };
    case actionTypes. :
      return { ...state, };
    case actionTypes. :
      return { ...state, };
    case actionTypes. :
      return { ...state, };
    case actionTypes. :
      return { ...state, };
    case actionTypes. :
      return { ...state, };
    default:
      return state
  }
};