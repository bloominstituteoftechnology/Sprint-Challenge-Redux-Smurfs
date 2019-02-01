import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
/* You need some sort of reducer */ 
import rootReducer from './reducers'

const allMiddlewares = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer,
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
