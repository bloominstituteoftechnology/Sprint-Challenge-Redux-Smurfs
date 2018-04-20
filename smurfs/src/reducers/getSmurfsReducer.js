import { FETCHED, ERROR } from '../actions/getSmurfsAction';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addSmurf: false,
  //updatingSmurf: false,
  deleteSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.error };
    case FETCHED:
      return {
        ...state,
        smurfs: action.smurfs,
        error: null
      };
    default:
      return state;
  }
};
