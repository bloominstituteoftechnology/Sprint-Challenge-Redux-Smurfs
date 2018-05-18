import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map(smurfs => {
          return <div key={smurfs}>{smurfs.name}</div>;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state,
  }
}
export default connect(mapStateToProps, { fetchSmurfs }) (App);
