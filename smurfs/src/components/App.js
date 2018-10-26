import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchSmurfs } from '../actions';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        {this.props.smurfs.map((smurf, index) => {
          return(
          <div key={index}>
            <h2>{smurf.name}</h2>
          </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App)
