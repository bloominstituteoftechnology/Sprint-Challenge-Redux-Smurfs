import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const middleWare = applyMiddleware(logger, thunk)
const store = createStore(rootReducer, middleWare);
// () => {}, // this is the most basic reducer. A function that returns an object. Replace it.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
