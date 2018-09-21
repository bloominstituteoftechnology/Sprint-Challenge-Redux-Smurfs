import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';

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
    console.log(`Current State on App.js ${this.props.smurfs}`);
  }
  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
        <p>Hello World!</p>
      </div>
    );
  }
}
// export default App;
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching
});
export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
