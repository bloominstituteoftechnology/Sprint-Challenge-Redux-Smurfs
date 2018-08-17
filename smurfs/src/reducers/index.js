import { FETCH_SMURFS, FETCHED_SMURFS, ERROR } from "../actions";

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

function smurfReducer (state = initialState, action) {
  switch(action.type){
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default smurfReducer
