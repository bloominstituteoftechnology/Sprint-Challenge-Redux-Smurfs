import { FETCHING, FETCHED, ADDED, UPDATING, UPDATED, DELETED, ERROR } from '../actions';

const initialState = {
  fetching: false,
  editingId: null,
  smurfs: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetching: true}
    case FETCHED:
      return {...state,
      fetching: false,
    smurfs: [...state.smurfs, ...action.payload]
      }
    case ADDED:
      return {...state, smurfs: [...action.payload] 
      }
    case UPDATING:
      return {...state, editingId: action.payload
      }
    case UPDATED:
      return {...state, editingId: null, smurfs: [...action.payload]
      }
    case DELETED:
      return {...state, smurfs: [...action.payload]
      }
    case ERROR:
      return {...state, fetching: false, editingId: null,error: action.payload
      }
    default:
      return state;
  }
}