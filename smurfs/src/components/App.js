import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import './App.css';
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
        <h2>{this.props.error ? 'Error fetching smurfs' : null}</h2>
        <h2>{(this.props.gettingSmurfs || this.props.creatingSmurf) ? 'Please wait...' : null}</h2>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    gettingSmurfs: state.smurfsReducer.gettingSmurfs,
    creatingSmurf: state.smurfsReducer.creatingSmurf,
    error: state.smurfsReducer.error,
  };
}

export default connect(mapStateToProps, { getSmurfs })(App);
