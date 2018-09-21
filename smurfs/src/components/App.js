import React, { Component } from 'react';
import './App.css';

import { fetchSmurfs } from '../actions'
import { connect } from 'react-redux'
import SmurfForm from './SmurfForm';
import UpdateSmurf from './UpdateSmurf';
import Smurfs from './Smurfs';
import Header from './Header';

import { Route, Switch } from 'react-router-dom'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {

      return (
        !this.props.smurfsFetched
        ? <p> all is loading </p>
        :
        <div className="App">
          <Route path='/' component={Header} />
          <Switch>
          <Route exact path='/smurf-form' render={props =>
            <SmurfForm
              {...props}
              anyprop={!this.props.updater}
              />
          }/>
          <Route exact path='/smurfs' render={props =>
            <Smurfs
              {...props}
              smurfs={this.props.smurfs}
              anyprop={!this.props.updater}
              // delete={this.deleteSmurf}
             />
          }/>
          <Route exact path='/smurf-update' render={props =>
            <UpdateSmurf
              {...props}
              smurfs={this.props.smurfs}
              delete={this.deleteSmurf}
              anyprop={!this.props.updater}
             />
          }/>
          </Switch>
        </div>
      );
  }
}

const mapStatetoProps = state => {
  return {
    smurfsFetched: state.smurfsFetched,
    smurfs: state.smurfs,
    updater: state.updater
  }
}

export default connect(mapStatetoProps,
  {pure: false, fetchSmurfs})
  (App)
