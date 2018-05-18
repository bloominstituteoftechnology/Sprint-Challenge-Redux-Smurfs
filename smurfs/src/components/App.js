import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import { getSmurfs } from '../actions';
import Smurf from '../components/Smurf.js';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to Smurf World!</h1>
        </header>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        <div className="App-intro"> 
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf} smurf={smurf} />; 
          })}
          {this.props.fetchingSmurfs ? (
            <img src="https://vignette.wikia.nocookie.net/smurfs/images/2/22/The-smurf-show.jpg/revision/latest?cb=20131031173244" className="App-photo" alt="The Smurfs" />
          ) : null}
          {this.props.error !== null ? <div>{this.props.error}</div> : null}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state); 
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};


export default connect (mapStateToProps, { getSmurfs })(App);
