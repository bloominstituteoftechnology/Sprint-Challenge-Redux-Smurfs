import React, { Component } from 'react';
import { connect } from 'tls';
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
        <div className="smurf-box">
          <h3>Name:{this.props.name}</h3>
          <p>Age:{this.props.age} smurfs years old</p>
          <p>Height:{this.props.height} tall</p>
          <br />
          <button 
            className="delete-btn"
            onClick= {e => {
              this.props.deleteSmurf(this.props.id);
            }}> Delete Smurf </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.deleteSmurf
  };
};

export default connect(
  mapStateToProps,
  {deleteSmurf}
  )(Smurf)

export default App;
