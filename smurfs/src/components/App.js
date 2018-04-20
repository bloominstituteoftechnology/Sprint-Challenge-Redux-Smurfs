import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSmurfs } from '../actions'
import './App.css'

import Smurfs from './Smurfs'

class App extends Component {
  componentDidMount () {
    this.props.fetchSmurfs()
  }
  render () {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    )
  }
}

App.propTypes = {
  fetchSmurfs: PropTypes.func,
  smurfs: PropTypes.array
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
