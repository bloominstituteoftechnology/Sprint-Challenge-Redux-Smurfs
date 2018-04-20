import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger /* be sure to throw in the proper middlewares here*/
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
