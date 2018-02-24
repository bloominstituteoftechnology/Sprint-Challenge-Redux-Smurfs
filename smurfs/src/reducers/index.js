import {
  FETCHING,
  FETCHED,
  ADDING,
  ADDED,
  REMOVING,
  REMOVED,
  ERROR_FETCHING,
  ERROR_ADDING,
  ERROR_REMOVING,
} from '../actions';

const initialState = {
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  error: null,
  smurfs: [],
};

const smurfs = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        smurfs: action.payload,
      };
    case ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ADDING:
      return {
        ...state,
        adding: true,
      }
    case ADDED:
      return {
        ...state,
        adding: false,
        added: true,
        smurfs: action.payload
      }
    case ERROR_ADDING:
      return {
        ...state,
        error: action.payload,
      }
    case REMOVING:
      return {
        ...state,
        removing: true,
      }
    case REMOVED:
      return {
        ...state,
        removing: false,
        removed: true,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      }
    case ERROR_REMOVING:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default smurfs;
