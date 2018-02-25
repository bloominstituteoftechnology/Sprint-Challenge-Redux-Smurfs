import * as actionTypes from '../actions';

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: true,
  smurfs: [],
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  console.log(`The reducer ran ${action.type}`);
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, fetchingSmurfs: true, };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false, smurfsFetched: true, };
    case actionTypes.CREATE_SMURF:
      return {
        ...state,
        addingSmurf: true,
        fetchingSmurfs: true,
        smurfsFetched: false,
      };
    case actionTypes.SMURF_CREATED:
      return {
        ...state,
        smurfCreated: true,
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload,
        addingSmurf: false,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurfs: false,
        updatingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
