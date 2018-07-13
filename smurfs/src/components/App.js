import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs } from '../actions/index'
import Smurfs from '../components/Smurfs'
import SmurfForm from '../components/SmurfForm'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to the Smurf Village!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <Smurfs {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchingSmurfs })(App);
