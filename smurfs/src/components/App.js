import React, { Component } from 'react';
import './App.css';

import { fetchSmurfs } from '../actions'
import { connect } from 'react-redux'
import SmurfForm from './SmurfForm';
import UpdateSmurf from './UpdateSmurf';
import Smurfs from './Smurfs';
import Smurf from './Smurf';
import Header from './Header';

import { Route } from 'react-router-dom'
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
    console.log('PROPS');
    console.log(this.props);
      return (
        !this.props.smurfsFetched
        ? <p> all is loading </p>
        :
        <div className="App">
          <Route path='/' component={Header} />
          <Route path='/smurf-form' render={props =>
            <SmurfForm {...props}  />
          }/>
          <Route exact path='/smurfs' render={props =>
            <Smurfs
              {...props}
              smurfs={this.props.smurfs}
              // delete={this.deleteSmurf}
             />
          }/>
          <Route exact path='/smurf-update' render={props =>
            <UpdateSmurf
              {...props}
              smurfs={this.props.smurfs}
              delete={this.deleteSmurf}
             />
          }/>
        </div>
      );
  }
}

const mapStatetoProps = state => {
  return {
    smurfsFetched: state.smurfsFetched,
    smurfs: state.smurfs
  }
}

export default connect(mapStatetoProps,
  {fetchSmurfs})
  (App)
