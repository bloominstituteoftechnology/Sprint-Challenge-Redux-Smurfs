import React, { Component } from 'react';
import './App.css';
import AddSmurf from './AddSmurf';
import Smurfs from './Smurfs';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <AddSmurf />
        <div className="List">
          {this.props.smurfsFound ? this.props.smurfs.map(
              (smurf, index) => {
                return (
                  <Smurfs key={index} index={index} smurf={smurf} />
                );
              }
            ) : <img className="App-logo" alt="" />}
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfsFound: state.smurfsFound,
  };
};

export default connect (mapStateToProps, { getSmurfs })(App);
