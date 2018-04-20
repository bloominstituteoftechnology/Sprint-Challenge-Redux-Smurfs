import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSmurfs } from '../actions'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.fetchSmurfs()
  }
  render () {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    )
  }
}

App.propTypes = {
  fetchSmurfs: PropTypes.func
}

const mapStateToProps = state => ({
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
})

export default connect(mapStateToProps, { fetchSmurfs })(App)
