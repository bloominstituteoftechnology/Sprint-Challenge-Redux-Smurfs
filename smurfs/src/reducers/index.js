import { FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      console.log('currently fetching smurfs...');
      return {
        ...state,
        fetchingSmurfs: true
      }
    case UPDATING_SMURF:
      console.log('currently updating smurfs...');
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload[0]]
      }
    case ADDING_SMURF:
      console.log('currently adding smurfs...');
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    case DELETING_SMURF:
      console.log('deleting smurf...');
    case ERROR:
      console.log('error!');
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
