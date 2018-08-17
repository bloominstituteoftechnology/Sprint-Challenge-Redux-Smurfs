import * as actionTypes from '../actions/index';
 const initialState = {
  theSmurfs: [],
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
    return {...state, theSmurfs: action.payload, getSmurfs: false}
    case actionTypes.ADDING_SMURF: 
    return{...state, addingSmurf: true}
    case actionTypes.ADDED_SMURF: 
    return {...state, theSmurfs: action.payload, addingSmurf: false}
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