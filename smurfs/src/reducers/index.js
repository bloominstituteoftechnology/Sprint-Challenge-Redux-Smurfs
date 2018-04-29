import { PENDING, SUCCESS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  smurf: {},
  pending: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING: 
      return Object.assign({}, state, { pending: true});
    
    case SUCCESS: 
      return Object.assign({}, state, { smurfs: action.smurfs, pending: false});
    
    case ERROR: 
      return Object.assign({}, state, { error: action.error, pending: false});

    default: return state;
  }
}

export default smurfReducer;



/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
