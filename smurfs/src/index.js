import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import logger from 'redux-logger';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import "./index.css";
import /* You need some sort of reducer */ "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
// () => {},
// this is the most basic reducer. A function that returns and object. Replace it.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
