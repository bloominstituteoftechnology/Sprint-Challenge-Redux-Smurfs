import * as actionTypes from '../actions';

const initialState = {
  smurfs: [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: 0,
    },
  ],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: true,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return { ...state, friends: action.payload, fetchingSmurfs: false };
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