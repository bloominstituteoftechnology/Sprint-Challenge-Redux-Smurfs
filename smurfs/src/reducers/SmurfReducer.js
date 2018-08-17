import * as actionTypes from '../actions/index';

const initialState = {
  village: [],
  getSmurfs: false, 
  addingSmurf: false, 
  updatingSmurf: false, 
  deletingSmurf: false, 
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.GETTING_SMURF: 
    return {...state, getSmurfs: true}
    case actionTypes.GET_SMURF: 
    return {...state, village: action.payload, getSmurfs: false}
    case actionTypes.ADDING_SMURF: 
    return{...state, addingSmurf: true}
    case actionTypes.ADDED_SMURF: 
    return {...state, village: action.payload, addingSmurf: false}
    case actionTypes.ERROR:
    return{
      ...state, 
      getSmurfs:false, 
      addingSmurf: false, 
    }
    default:
    return state
  }
}



/*
  Be sure to import in all of the action types from `../actions`
*/

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
