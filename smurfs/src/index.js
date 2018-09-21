import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const reduxDevTools =
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    reduxDevTools
  ) // this is the most basic reducer. A function that returns and object. Replace it.
  // applyMiddleware( be sure to throw in the proper middlewares here )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
