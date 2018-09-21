import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import SmurfForm from './SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.name}>{smurf.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
