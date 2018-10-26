import { FETCHING, FETCH_FINISHED } from "../actions";

const initialState = [];

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return true;
    case FETCH_FINISHED:
      return false;
    default:
      return state;
  }
};
