import React, { Component } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
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
        <Smurfs smurfs ={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    smurfs: smurfReducer.smurfs,
    gettingSmurfs: smurfReducer.gettingSmurfs,
    error: smurfReducer.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
