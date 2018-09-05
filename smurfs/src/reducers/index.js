import { ADD_SMURF, GET_SMURF, UPDATE_SMURF, DELETE_SMURF, ERROR_THROWN, YAY_SUCCESS } from '../actions/index';
import { thunk, dispatch } from 'react-thunk';
import axios from 'axios';


const initialState = {
  smurfs: [],
  getSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};


export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case GET_SMURF:
      return
      Object.assign({}, state, { getSmurf: true });
    case UPDATE_SMURF:
      return Object.assign({}, state, { updatingSmurf: true })
    case DELETE_SMURF:
      return Object.assign({}, state, { deletingSmurf: true });
    case YAY_SUCCESS:
      return Object.assign({}, state, {
        gettingSmurf: false, 
        addingSmurf: false, 
        updatingSmurf: false, 
        deletingSmurf: false,
        error: null
      });

    case ERROR_THROWN:
      return console.log(err);

    default:
      return state;
  };
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
