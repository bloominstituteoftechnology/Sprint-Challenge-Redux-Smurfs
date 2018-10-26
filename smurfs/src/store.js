import smurfsReducer from "./reducers";
import { applyMiddleware, createStore, compose } from "redux";

const logger = store => next => action => {
  console.group("Redux Action");
  console.log("current state", store.getState());
  console.log("action", action);
  let result = next(action);
  console.log("new state", store.getState());
  console.groupEnd();
  return result;
};

const myToUpperCase = store => next => action => {
  const fixedUpAction = { ...action, type: action.type.toUpperCase() };
  return next(fixedUpAction);
};

const thunk = store => next => action => {
  if (typeof action === "function") {
    if (!store.getState().smurfettes.fetchingSmurfs) {
      action(store.dispatch);
    } else {
      console.log("WHAT ARE YOU TRYING TO DO IM ALREADY FETCHING???");
    }
  } else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  smurfsReducer,
  composeEnhancers(applyMiddleware(thunk, logger, myToUpperCase))
);

export default store;