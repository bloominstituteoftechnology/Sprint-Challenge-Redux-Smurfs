import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurfs from './smurfs';
import { getSmurfs, destroySmurf } from '../actions';
import './App.css';
import CreateSmurfForm from './createSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <CreateSmurfForm />
        <Smurfs 
          smurfs={this.props.smurfs}
          gettingSmurfs={this.props.gettingSmurfs}
          destroySmurf={this.props.destroySmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs, destroySmurf })(App)