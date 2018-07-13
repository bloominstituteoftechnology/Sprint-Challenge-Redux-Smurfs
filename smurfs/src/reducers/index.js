
import { FETCHING, 
         FETCHED, 
         ERROR,
         ADDING,
         ADDED 
         } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING:
    return {...state, fetchingSmurfs: true};

    case FETCHED:
    return {...state,
    fetchingSmurfs: false,
    smurfs: action.payload  
    };

    case ADDING:
    return {...state, addingSmurfs: true};

    case ADDED:
    return {...state,
    addingSmurfs: false,
    smurfs: action.payload
    };

    case ERROR:
    return {...state,
    fetchingSmurfs: false,
    addingSmurf: false,
    deletingSmurf:false,
    updatingSmurf:false,
    error: action.payload};
    
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default rootReducer;