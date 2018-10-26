import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  CREATING_SMURFS,
  CREATED_SMURFS,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  creatingSmurfs: false,  
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, isFetching: true} ;
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCHING_SMURFS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case CREATING_SMURFS: 
      return {...state, creatingSmurfs: true}
    case CREATED_SMURFS:
      return {...state, smurfs: action.payload, creatingSmurfs: false}
    default:
      return state;
  }
};

