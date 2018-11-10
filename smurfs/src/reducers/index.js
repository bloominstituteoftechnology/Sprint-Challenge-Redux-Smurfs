import {
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF,
  UPDATING_SMURF,
  UPDATED_SMURF,
  DELETING_SMURF,
  DELETED_SMURF,
  ERROR,
} from '../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  updatedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload,
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      };
    case ADDED_SMURF:
      return {
        ...state,
        addingSmurf: false,
        addedSmurf: true,
        smurfs: action.payload,
      };
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: true,
      };
    case UPDATED_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => {
          if (smurf.id === action.payload.id) return action.payload;
          return smurf;
        }),
        updatingSmurf: false,
        updateSmurf: true,
      };
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      };
    case DELETED_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => {
          return smurf.id !== action.payload.SmurfRemoved.id;
        }),
        deletingSmurf: false,
        deletedSmurf: true,
      };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: false,
        addedSmurf: false,
        updatingSmurf: false,
        updatedSmurf: false,
        deletingSmurf: false,
        deletedSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
