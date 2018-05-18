
import {
  FETCHINGSMURFS,
  FETCHEDSMURFS,
  ADDINGSMURFS,
  UPDATINGSMURFS,
  DELETINGSMURFS,
  ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  FetchingSmurfs: false,
  FetchedSmurfs: false,
  UpdatingSmurf: false,
  DeletingSmurf: false,
  Error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHINGSMURFS:
      return {
        ...state,
        FetchingSmurfs: true
      };
    case FETCHEDSMURFS:
      return {
        ...state,
        FetchedSmurfs: true
      };
    case UPDATINGSMURFS:
      const index = state.smurfs.findIndex(
        smurf => smurf.id === action.smurf.id
      );
      return {
        ...state,
        UpdatingSmurf: true,
        smurfs: [
          ...state.smurfs.slice(0, index),
          (state.smurfs[index] = {
            ...state.smurfs[index],
            isUpdating: true
          }),
          ...state.smurfs.slice(index + 1)
        ]
      };

      case ADDINGSMURFS:
      return {
        ...state,
        addingSmurf: true,
      }

    case DELETINGSMURFS:
      return {
        ...state,
        deletingSmurfs: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
