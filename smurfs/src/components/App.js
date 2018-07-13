import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.fetchingSmurfs ? (
            <h1>Fetching Smurfs</h1>
          ) : (
            <ul>
              {this.props.smurfs.map(smurf => {
                return (
                  <div>
                    <li key={smurf.id}>{smurf.name}</li>
                    <button onClick={() => this.props.deleteSmurf(smurf.id)}>Send me to the smurf gods</button>
                  </div>  
                  );
              })}
            </ul>
          )}

          {this.props.error ? (
            <h1>{this.props.error}</h1>
          ) : null}
          <SmurfForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error,

  }
}


export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);
