import {FETCH, FETCHING, ERROR, ADDING, ADDED, REMOVED} from '../actions';


const initialState = {
  loading: false,
  adding: false,
  smurfs: [],
  error: null
};

 export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return {...state,
      loading: true,
    }

    case FETCHED:
    return {...state,
      smurfs: action.payload,
      loading: false,
    }

    case ERROR:
    return { ...state,
      loading: false,
      error: 'Yikes, friend!'
    }

    case ADDING:
    return {...state,
      adding: true,
    }
    case ADDED:
    return {...state,
      smurfs: action.payload,
      adding: false,
    }

    case REMOVED:
    return { ...state,
      smurfs: action.payload,

    }
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
