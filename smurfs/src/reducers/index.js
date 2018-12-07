import * as actions from '../actions'

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
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case actions.GET_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case actions.POST_REQUEST:
      return {
        ...state,
        addingSmurf: true,
      }
    case actions.POST_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      }
      case actions.DELETE_REQUEST:
      return {
        ...state,
        deletingSmurf: true,
      }
    case actions.DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
      }
    case actions.GET_FAILURE:
    case actions.POST_FAILURE:
    case actions.DELETE_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload,
      }
    default:
      return state;
  }
}