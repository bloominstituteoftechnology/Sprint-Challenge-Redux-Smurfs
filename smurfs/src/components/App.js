import React, { Component } from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addSmurf, getSmurfs, updateSmurf, deleteSmurf } from '../actions'
import Nav from './Nav'
import SmurfForm from './SmurfForm'
import Smurfs from './Smurfs'

const mapStateToProps = ({
  smurfs,
  fetchingSmurfs,
  addingSmurf,
  updatingSmurf,
  deletingSmurf,
  error
}) => ({
  smurfs,
  fetchingSmurfs,
  addingSmurf,
  updatingSmurf,
  deletingSmurf,
  error
})

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    const { smurfs, addSmurf, updateSmurf, deleteSmurf } = this.props

    return (
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} {...this.props} />}
        />
        <Route
          path="/smurf/:id"
          render={props => <Smurfs {...props} {...this.props} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} {...this.props} />}
        />
      </div>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { addSmurf, getSmurfs, updateSmurf, deleteSmurf }
  )(App)
)
