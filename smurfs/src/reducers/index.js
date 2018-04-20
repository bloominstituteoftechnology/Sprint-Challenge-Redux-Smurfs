import { 
  FETCHING_SMURFS, 
  ADDING_SMURFS, 
  UPDATE_SMURFS,
  DELETING_SMURFS, 
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  updateSmurfs: false,
  deletingSmurfs: false,
  error: null,
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetching: false };
    case ADDING_SMURFS:
      return { ...state, adding: false };
    case UPDATE_SMURFS:
      return { ...state, adding: false };
    case DELETING_SMURFS:
      return { ...state, deleting: false };
    default: 
      return state;
  };

};
