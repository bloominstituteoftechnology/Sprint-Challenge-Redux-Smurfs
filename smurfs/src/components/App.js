import './App.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSmurfs } from '../actions'
import AddSmurfForm from '../components/AddSmurfForm'
import SmurfList from '../components/SmurfList'

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        <AddSmurfForm />
        {this.props.fetching ? (
          <p>Fetching data</p>
        ) : (
          <SmurfList smurfs={this.props.smurfs} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App)
