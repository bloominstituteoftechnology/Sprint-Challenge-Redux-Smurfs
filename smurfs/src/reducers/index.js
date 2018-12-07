import {
  SMURF_FETCHING,
  SMURF_SUCCESS,
  SMURF_FAILURE
} from '../actions'

const initialState= {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURF_FETCHING:
      return {

      }

    case SMURF_SUCCESS:
      return {

      }

    case SMURF_FAILURE:
      return {

      }

    default:
      return state;
  }
}

export default reducer;