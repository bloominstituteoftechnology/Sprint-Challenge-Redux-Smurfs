import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./components/App";
import "./index.css";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// () => {},
// this is the most basic reducer. A function that returns and object. Replace it.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
