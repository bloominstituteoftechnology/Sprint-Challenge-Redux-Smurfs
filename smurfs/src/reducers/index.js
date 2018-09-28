import {FETCHING, FETCHED, ERROR} from '../actions/index'

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 updatingSmurf: false
  deletingSmurf: false
  addingSmurf:false
*/
const initialState = {
   smurfs: [],
   fetching: false
   fetched: false
   error: null
}

export default smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return{...state, fetching:true};
    case FETCHED:   
      return{...state, 
        smurfs: action.payload, fetching: false, 
        fetched: true
      };
    case ERROR:
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      };
    default:
      return state;```
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/