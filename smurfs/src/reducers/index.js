import{
  GET_SMURFS,
  ERROR,
  ADDING_SMURF
} from '../actions/index';

const initState ={
  smurfs: [],
  fetchingSmurfs: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initState, action) => {
  switch(action.type)
  {
    case GET_SMURFS:
      return Object.assign({}, state, {smurfs: action.payload});
    case ERROR: 
      return Object.assign({}, state, {error: "ERROR!"});
    default: 
      return state;
  }
};