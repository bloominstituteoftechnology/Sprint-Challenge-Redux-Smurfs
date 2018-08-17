import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { Route } from 'react-router-dom';
import SmurfForm from './SmurfForm';

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
        <Route exact path="/smurfs" component={SmurfForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
