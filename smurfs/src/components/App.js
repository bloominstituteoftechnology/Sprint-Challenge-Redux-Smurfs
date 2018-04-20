import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';

import AddSmurf from './AddSmurf';
import './AddSmurf.css'
import { SmurfList } from './SmurfList';

import { fetchSmurfs, createSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log('app props', this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf createSmurf={this.props.createSmurf}/>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        {this.props.fetchingSmurfs === true ? <img src={logo} className="App-logo" alt="logo" /> : <SmurfList smurfs={this.props.smurfs}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);