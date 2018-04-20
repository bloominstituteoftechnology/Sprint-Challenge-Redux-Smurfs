import { UPDATE_NAME, UPDATE_AGE, UPDATE_HEIGHT, RESET_INPUT } from '../actions/formInput';

const initialState = {
  name: "",
  age: "",
  height: ""
}

export const inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }

    case UPDATE_AGE:
      return {
        ...state,
        age: action.payload
      }

    case UPDATE_HEIGHT:
      return {
        ...state,
        height: action.payload
      }

    case RESET_INPUT:
      return Object.assign({}, state, {name: "", age: "", height: ""});

    default: return state;
  }
}