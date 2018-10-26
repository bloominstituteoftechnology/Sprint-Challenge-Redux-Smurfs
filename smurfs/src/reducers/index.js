/*
  Be sure to import in all of the action types from `../actions`
*/
import 
{
  FETCHING_SMURFS,
  ADDING_SMURF,
  FETCHED,
  ADDED,
} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    added : false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
    newSmurf : {
      name : '',
      age : '',
      height : '',
    }
}


export const smurfReducer = (state = initialState,action)=>{
  switch(action.type){
    case FETCHING_SMURFS :
      return {...state, fetchingSmurfs : true}

    case FETCHED :
      return{
        ...state,
        smurfs : action.payload,
        fetchingSmurfs : false,
      }
    default : return state;
  }
}

export const addNewSmurf = (state = initialState,action) => {
  switch(action.type){
    case ADDING_SMURF : 
      return{...state,addingSmurf : true}
    case ADDED :
      return {
        ...state,
        smurfs : [...state.smurfs,action.payload],
        addingSmurf : false 
      }
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
