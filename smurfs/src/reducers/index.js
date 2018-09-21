/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCHED, ADDING, ADDED, ERROR } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state,
      fetchingSmurfs: true
    };
    case FETCHED:
      return {...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
      fetchedSmurfs: true
    };
    case ADDING:
      return {...state,
      addingSmurf: true,
    };
    case ADDED:
      return {...state,
      smurfs: action.payload,
      addingSmurf: false,
      addedSmurf: true
    };
    case ERROR:
      return {...state,
      fetchingSmurfs: false,
      addingSmurf: false,
      updatingSmurf: false,
      deletingSmurf: false,
      error: action.payload
      }
    default:
    return state
  }
}