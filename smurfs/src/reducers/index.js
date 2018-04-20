import { FETCHING_SMURFS, ADDING_SMURFS, UPDATING_SMURFS, DELETING_SMURFS, ERROR} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  error: null,
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetching: false };
    case ADDING_SMURFS:
      return { ...state, adding: false };
    case UPDATING_SMURFS:
      return { ...state, updating: false };
    case DELETING_SMURFS:
      return { ...state, deleting: false };
    case ERROR_FETCHING_SMURFS:
      return {}
  }
}
