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
  smurf: null,
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  updatingSmurf: false,
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
        error: null,
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
        error: null,
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
        error: null,
      }
    case actions.PUT_REQUEST:
      return {
        ...state,
        updatingSmurf: true,
      }
    case actions.PUT_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
        error: null,
      }
    case actions.GET_FAILURE:
    case actions.POST_FAILURE:
    case actions.DELETE_FAILURE:
    case actions.PUT_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        error: action.payload,
      }
    case actions.SELECT_SMURF:
      return {
        ...state,
        smurf: state.smurfs.find(smurf => smurf.id === action.payload.id)
      }
    default:
      return state;
  }
}