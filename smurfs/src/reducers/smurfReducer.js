import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
} from '../actions';

const initialState = {
  fetching: false,
  smurfs: [],
  error: null,
}

export const smurfReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCHING_SMURFS:
    return {...state, fetching: true};
    case FETCHING_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: [...action.payload],
      fetching: false,
      }
      case FETCHING_SMURFS_FAILURE:
      return {
        ...state, 
        fetching: false, 
        error: action.payload}
        default: 
        return state;
  }
}