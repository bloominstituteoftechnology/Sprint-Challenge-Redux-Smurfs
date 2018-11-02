import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? <h3>Getting your Smurfs...</h3> : null}
        {!this.props.fetchingSmurfs && this.props.smurf.length ? 
        <ul>
          {this.props.smurfs.map(smurf => {
            <li>
              <h4>{smurf.name}</h4>
              <h5>{smurf.age}</h5>
              <h6>{smurf.height}</h6>
            </li>
          })}
        </ul>
          : null  
      }
      </div>
    );
  }
}
const mapStateToProps = state =>({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(mapStateToProps, { getSmurfs })(App);
