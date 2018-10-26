import { GET_SMURF, ADD_SMURF, GET_SMURFSUCCESS, GET_SMURFERR} from '../actions';


const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    fetchedSmurfs: false,
    addingSmurf: false,
    addedSmurf: false,
    error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF: 
    return {...state, fetchingSmurfs: true}
    case GET_SMURFSUCCESS: 
    return  {...state, fetchingSmurfs: false, fetchedSmurfs: true, smurfs: action.payload}
    case GET_SMURFERR: 
    return {...state, fetchedSmurfs: false, error: action.payload}
    case ADD_SMURF: 
    return { ...state, fetchingSmurfs: false, addedSmurf: true };
      

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.


    default:
      return state;
  }
};


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
