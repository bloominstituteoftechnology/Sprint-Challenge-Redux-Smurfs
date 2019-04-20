import {
  SMURF_CALL,     //D
  SMURF_SUCCESS,  //R
  SMURF_FAIL      //Y
} from '../actions'

const initialState = {
  error: null,
  calling: false,
  smurfs: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SMURF_CALL:
      return {
        ...state,
        error: null,
        calling: true,
      }
    case SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        calling: false,
        smurfs: action.payload,
      }
    case SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        calling: false,
      }
    default:
      return state
  }
}