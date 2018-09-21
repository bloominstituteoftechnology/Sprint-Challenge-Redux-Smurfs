import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import /* You need some sort of reducer */rootReducer from './reducers'

const initialState = {}

const allMiddlewares = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer,
  initialState,
  allMiddlewares,
  // () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
  // applyMiddleware(/* be sure to throw in the proper middlewares here*/)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
