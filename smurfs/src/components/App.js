import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import fetchSmurf from '../actions'
import createSmurf from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
        {console.log(this.props)}
            {this.props.smurfs.map((smurf, index) => {
              return <li key={index}>{smurf.name} <br /> {smurf.age} <br /> {smurf.height} <br /> {smurf.id}</li>;
            })}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurf
  }
)(App);
