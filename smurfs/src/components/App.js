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
        <h1>SMURFS! Village!</h1>
        <div>Welcome Friends!</div>
        <div>Have fun!</div>
        <h2>Current Residents</h2>
        {this.props.smurfs.map(smurfs => {
          return <div key={smurfs}>{smurfs.name} Smurf {smurfs.age} years old!
          and {smurfs.height} cm tall!</div>
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
