import * as AT from '../actions/actionTypes';

/*
 Your initial/default state for this project could look a lot like this
*/
 const initialState ={
smurfs: [],
fetchingSmurfs: false,
addingSmurf: false,
updatingSmurf: false,
deletingSmurfs: false,
error: null,
}
const smurfsReducer = (state =initialState, action) =>{
switch(action.type){
  case AT.PENDING_SMURFS:
  console.log(state)
      return{...state, fetchingSmurfs: true}
  case AT.SUCCESS_SMURFS:
  console.log(state)
    return{...state, smurfs: action.payload, fetchingSmurfs: false}

    case AT.POSTING_SMURFS:
      return { ...state, addingSmurfs: true };
    case AT.POST_SMURFS:
      return { ...state, smurfs: action.payload, addinfSmurfs: false };

  case AT.ERROR_SMURFS:
  console.log(state)
  return {...state,
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurfs: false,
    error: action.payload,
}
  default:
  return state;
}
}

export default smurfsReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/