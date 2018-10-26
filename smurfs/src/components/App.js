import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.smurfs.map(smurf => {
            return (
              <div>
                <h2>{smurf.name}</h2>
                <h2>{smurf.age}</h2>
                <h2>{smurf.height}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const {smurfs, addingSmurf, updatingSmurf, deleteSmurf, error} = state;
  return {...state}
}

export default connect(mapStateToProps , {})(App);
