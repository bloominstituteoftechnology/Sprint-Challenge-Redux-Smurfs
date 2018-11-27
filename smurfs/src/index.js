import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, composeEnhancers(middleWare));
// () => {}, // this is the most basic reducer. A function that returns an object. Replace it.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
