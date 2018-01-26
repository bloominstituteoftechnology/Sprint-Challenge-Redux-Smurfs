import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
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
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
        <div>
          {this.props.gettingSmurfs ? (
            <img src="" alt=""/>
            ) : (
              <Smurfs smurfs={this.props.smurfs} />
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
