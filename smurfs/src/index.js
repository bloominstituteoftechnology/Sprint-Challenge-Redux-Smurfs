//react
import React from 'react'
import ReactDOM from 'react-dom'
//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
//middleware
import thunk from 'redux-thunk'
// import logger from 'redux-logger' //logger sucks
//reducer
import reducer from './reducers'
//local
import Routes from './components/routes'
import './reset.css'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  root
)