import { 
  FETCHING_SMURFS, 
  SUCCESS_FETCHING, 
  CREATING_SMURFS,
  SUCCESS_CREATING,
  REJECTED
} from '../actions';

const initialState = {
  smurfs: [], 
  fetchingSmurfs: false,
  addingSmurfs: false,
  updateSmurfs: false,
  deletingSmurfs: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS_FETCHING:
      return Object.assign({}, state, { 
        fetchingSmurfs: false, 
        error: null, 
        smurfs: action.payload
      });
    case CREATING_SMURFS:
      return Object.assign({}, state, { addingSmurfs: true });
    case SUCCESS_CREATING:
      return Object.assign({}, state, { 
        addingSmurfs: false, 
        error: null, smurfs: 
        action.payload 
      });
    case REJECTED:
      return Object.assign({}, state, { 
        error: action.payload, 
        fetchingSmurfs: false, 
        addingSmurfs: false 
      });
    default:
      return state;
  }
};
