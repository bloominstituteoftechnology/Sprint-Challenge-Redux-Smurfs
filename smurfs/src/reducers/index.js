/*
  Be sure to import in all of the action types from `../actions`
*/
import * as AT from '../actions'

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
   pending: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case AT.PENDING:
            return Object.assign({}, state, { 
                pending: true,
             });
        case AT.SUCCESS:
            return Object.assign({}, state, { 
                pending: false,
                smurfs: [...action.payload],
            })
        case AT.ERROR:
            return Object.assign({}, state, { 
                pending: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default smurfsReducer;
