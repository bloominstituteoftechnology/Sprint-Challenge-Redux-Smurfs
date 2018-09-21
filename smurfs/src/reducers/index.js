import {
  FETCHING,
  SUCCESS_FETCHING,
  ERROR,
  ADDING,
  SUCCESS_ADDING,  
} from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {    

    case FETCHING:
      return Object.assign({}, state, {
          fetchingSmurfs: true
      });   

    case SUCCESS_FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload
      });

    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: true
      });

    case ADDING:
      return Object.assign({}, state, {
        addingSmurf: true
      });

    case SUCCESS_ADDING:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfs: [...action.payload]
      });   

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
