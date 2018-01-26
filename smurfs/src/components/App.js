import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import SmurfList from './smurfList';
import SmurfInput from './smurfInput';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfInput />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

App.defaultProps - {
  smurfs: [],
}

const mapStateToProps = state => {
  return {
    smurfs: state,
  }
}

export default connect(mapStateToProps, { getSmurfs })( App );
