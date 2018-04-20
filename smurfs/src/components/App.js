import React, { Component } from 'react'
import { withRouter, Route } from 'react-router'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Route path='/edit/:id' render={(props) => (
          <SmurfForm {...props} key={props.match.params.id} />
        )} />
        <Route exact path='/' component={SmurfForm} />
        <Route path='/' render={(props) => (
          <SmurfList {...props} smurfs={this.props.smurfs} />
        )} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  smurfs: state.smurfs,
})

export default withRouter(connect(mapStateToProps, { fetchSmurfs })(App))
