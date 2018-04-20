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
  // starting smurphs to confirm .map is working before adding a way to create new smurphs
  smurfs: [
    { id: 0, name: "Eddie Smurphy", age: 50, height: "short" },
    { id: 1, name: "Eduardo Smurphificius", age: 42, height: "shortish" }
  ],
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
        smurfs: [...state.friends, ...action.payload],
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
        smurfs: [...action.payload],
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
