import {GET_SMURFS, LOADING, DELETE_SMURFS, UPDATE_SMURFS, ERROR} from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfReducer = (state = initialState, action) => {
   switch(action.type){
     case LOADING:
      return Object.assign({}, state, {loading: true})
    case GET_SMURFS:
      return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {smurfs: action.ERROR, loading: false})
    default:
      return state
   }
 }

