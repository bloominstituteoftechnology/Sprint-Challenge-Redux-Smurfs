import * as actions from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurfs: false,
  addedSmurfs: false,
  deletingSmurfs: false,
  deletedSmurfs: false,
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case actions.FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload,
      };
    case actions.ADDING_SMURFS:
      return { ...state, addingSmurfs: true };
    case actions.ADDED_SMURFS:
      return {
        ...state,
        addingSmurfs: false,
        addedSmurfs: true,
        smurfs: action.payload,
      };
    case actions.DELETING_SMURFS:
      return { ...state, deletingSmurfs: true };
    case actions.DELETED_SMURFS:
      return { ...state, deletingSmurfs: false, deletedSmurfs: true, smurfs: [...state.smurfs.slice(0, action.payload), ...state.smurfs.slice(action.payload + 1)]};
    case actions.ERROR:
      return { ...state, fetchingSmurfs: false, addingSmurfs: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
