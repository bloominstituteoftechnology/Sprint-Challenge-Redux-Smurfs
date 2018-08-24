import {
  FETCHED_SMURFS,
  FETCHING_SMURFS,
  SAVED_SMURFS,
  ERROR,
  SAVING_SMURFS
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  savingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.import { FETCHED_SMURFS, SAVED_SMURFS } from '../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer =(state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return [...state, {
        fetchingSmurfs: true
      })];
    case FETCHED_SMURFS:
      return [...state, {
        fetchingSmurfs: false,
        smurfs: action.payload
      })];
    case SAVING_SMURFS:
      return [...state, {
        savingSmurf: true
      }];
    case SAVED_SMURFS:
      return [...state, {
        savingSmurf: false,
        smurfs: action.payload
      }];
    case ERROR:
      return [...state, {
        error: action.payload
      }];
    default:
      return state;
    };

};