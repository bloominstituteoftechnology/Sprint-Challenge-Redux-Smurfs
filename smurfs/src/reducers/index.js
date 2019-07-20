import { FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS: {
      console.log('fetching smurfs');
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      }
    }

    case UPDATING_SMURF: {
      console.log('updating smurfs');
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: true,
        deletingSmurf: false,
        smurfs: action.payload,
      }
    }

    case ADDING_SMURF: {
      console.log('adding smurf')
      const newSmurf = {
        value: action.payload
      }
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        updatingSmurf: false,
        deletingSmurf: false,
        smurfs: [...state.smurfs, newSmurf]
      }
    }

    case DELETING_SMURF: {
      console.log('deleting smurf');
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: true,
      }
    }

    case ERROR:
      console.log('error')
      break;
      default: return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
