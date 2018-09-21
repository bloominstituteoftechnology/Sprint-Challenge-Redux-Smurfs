import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 import { fetchSmurfs } from '../actions/index';
 import { SmurfForm } from '../container/SmurfForm';
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <h2>Add One!</h2>
          {/* <SmurfForm /> */}
        </div>
        <div>
         <h3> Here's the Current Smurf Village </h3>
          </div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return <p key={smurf.id}>{smurf.name}<br/>{smurf.age}<br/>{smurf.height}</p>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchSmurfs: state.fetchSmurfs
  }; 
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
