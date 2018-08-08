import {
  GET_SMURFS,
  POST_SMURFS,
  PUT_SMURFS,
  DELETE_SMURFS,
  ERROR
} from '../actions';


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
const initialState = {
  smurfs: [],
  getSmurfs: false,
  createSmurfs: false,
  deleteSmurfs: false,

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return { ...state,
        smurfs: action.smurfs,
        error: null
      };
      break;
    case POST_SMURFS:
      return { ...state,
        smurfs: action.smurfs,
        error: null
      };;
      break;
    case PUT_SMURFS:
      return { ...state,
        smurfs: [action.smurfs],
        error: null
      };;
      break;
    case DELETE_SMURFS:
      const index = state.smurfs.findIndex(smurf => smurf.id === action.id);
      const filtered = [...state.smurfs.slice(0, index), ...state.smurfs.slice(index + 1)];
      return { ...state,
        smurfs: filtered,
        error: null
      };;
      break;
    case ERROR:
      return { ...state,
        error: action.errorMessage
      };;
      break;
    default:
      return state;
  }
};