import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  smurfs: [],
  fetchingSmurfs: true,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case ActionTypes.SUCCESS_SMURFS:
      return Object.assign({}, state, { smurfs: [...action.payload], fetchingSmurfs: false });
    case ActionTypes.ERROR_SMURFS:
      return Object.assign({}, state, { error: action.payload });
  }
};

export default smurfsReducer;