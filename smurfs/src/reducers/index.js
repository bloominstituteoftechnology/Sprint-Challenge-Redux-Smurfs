import {GETTING, GOT, ERROR, ADDING, ADDED, DELETED} from '../actions';
const initialState = {
  loading: false,
  adding: false,
  smurfs: [],
  error: null
};

export const superReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
    return {...state, 
      loading: true,
    }

    case GOT:
    return {...state, 
      smurfs: action.payload,
      loading: false,
    }

    case ERROR:
    return { ...state, 
      loading: false,
      error: 'ohhhh noo'
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

    case DELETED:
    return { ...state,
      smurfs: action.payload,

    }
    default: return state;
  }
}
