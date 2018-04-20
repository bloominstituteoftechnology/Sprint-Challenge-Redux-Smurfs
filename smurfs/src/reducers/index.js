import {
  FETCHING,
  FETCHED,
  CREATING,
  CREATED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
  ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  creatingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      });
    case CREATING:
      return Object.assign({}, state, { creatingSmurf: true });
    case CREATED:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        creatingSmurf: false
      });
    case UPDATING:
      return Object.assign({}, state, { updatingSmurf: true });
    case UPDATED:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        updatingSmurf: false
      });
    case DELETING:
      return Object.assign({}, state, { deletingSmurf: true });
    case DELETED:
      return Object.assign({}, state, {
        smurfs: [
          ...state.smurfs.filter(
            smurf => smurf.id !== action.payload.SmurfRemoved.id
          )
        ],
        deletingSmurf: false
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        creatingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: "Error fetching or creating smurfs"
      });
    default:
      return state;
  }
};
